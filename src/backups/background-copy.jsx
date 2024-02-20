import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { Vector2 } from 'three/src/math/Vector2';
import fragmentShader from '../background/fragmentShader.glsl'
import galaxy from '../background/galaxy.png'
import stars from '../background/stars.png'
import disk from '../background/disk.png'

// console.log('Galaxy URL:', galaxy);
// console.log('Stars URL:', stars);
// console.log('Disk URL:', disk);


const Background = () => {
  
  const mountRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

  let lastframe = Date.now()
  let delta = 0
  let time = 0
  const performanceResolution = 1.0


// set variables types for shader
const uniforms = {
  time: { type: "f", value: 0.0 },
  resolution: { type: "v2", value: new THREE.Vector2() },
  accretion_disk: { type: "b", value: true },
  use_disk_texture: { type: "b", value: true },
  lorentz_transform: { type: "b", value: true },
  doppler_shift: { type: "b", value: true },
  beaming: { type: "b", value: true },
  cam_pos: { type: "v3", value: new THREE.Vector3() },
  cam_vel: { type: "v3", value: new THREE.Vector3() },
  cam_dir: { type: "v3", value: new THREE.Vector3() },
  cam_up: { type: "v3", value: new THREE.Vector3() },
  fov: { type: "f", value: 0.0 },
  bg_texture: { type: "t", value: null },
  star_texture: { type: "t", value: null },
  disk_texture: { type: "t", value: null }
}

////////////////Observer/////////////////

class Observer extends THREE.PerspectiveCamera {
  constructor(ratio, near, far) {
    super(ratio, near, far)
    // for orbit
    this.fov = 90
    this.time = 0
    this.theta = 0
    this.angularVelocity = 0
    this.maxAngularVelocity = 0
    this.velocity = new THREE.Vector3()

    this.position.set(0, 0, 1)
    this.direction = new THREE.Vector3();

    // options
    this.moving = true
    this.timeDilation = false
    this.incline = -5 * Math.PI / 180
  }

  // sets position, r vector, direction by supplying distance from center
  setdistance() {
    const fixedDistance = 10; // some fixed value
  this.r = fixedDistance;
  this.maxAngularVelocity = 1 / Math.sqrt(2.0 * (fixedDistance - 1.0)) / this.r;
  this.position.normalize().multiplyScalar(fixedDistance);
  }

  setDirection(pitch, yaw) {
    let originalDirection = new THREE.Vector3(0, 0, -1)
    let rotation = new THREE.Euler(0, 0, 0, 'YXZ')
    rotation.set(pitch, yaw, 0)

    let newDirection = new THREE.Vector3()
    newDirection.copy(originalDirection).applyEuler(rotation)

    this.direction = newDirection.normalize();
  }

  update(delta) {
    // apply time dilation to delta time
    if (this.timeDilation) {
      this.delta = Math.sqrt((delta * delta * (1.0 - this.angularVelocity * this.angularVelocity)) / (1 - 1.0 / this.r));
    } else {
      this.delta = delta
    }

    // update angle of the camera, orbits around
    this.theta += this.angularVelocity * this.delta
    let cos = Math.cos(this.theta)
    let sin = Math.sin(this.theta)


    // set position according to the angle above
    this.position.set(this.r * sin, 0, this.r * cos)
    // change direction of movement
    this.velocity.set(cos * this.angularVelocity, 0, -sin * this.angularVelocity)

    // give some incline to camera
    let inclineMatrix = (new THREE.Matrix4()).makeRotationX(this.incline)
    this.position.applyMatrix4(inclineMatrix)
    this.velocity.applyMatrix4(inclineMatrix)

    if (this.moving) {
      // accel
      if (this.angularVelocity < this.maxAngularVelocity)
        this.angularVelocity += this.delta / this.r
      else
        this.angularVelocity = this.maxAngularVelocity

    } else {
      // deccel
      if (this.angularVelocity > 0.0)
        this.angularVelocity -= this.delta / this.r
      else {
        this.angularVelocity = 0
        this.velocity.set(0.0, 0.0, 0.0)
      }
    }

    this.time += this.delta
    
  }

}

//////////////Observer Orientation/////////////////////

class ObserverOrientation {

  constructor(observer, domElement) {
    this.domElement = domElement;
    this.observer = observer;
    let inclineMatrix = new THREE.Matrix4().makeRotationZ(this.observer.incline);
    this.observer.up.applyMatrix4(inclineMatrix);
    this.pitch = 0;
    this.yaw = 0;
    
  }

  update(delta) {

    if (this.observer.angularVelocity > 0) {
      this.yaw += this.observer.angularVelocity * delta;
    }

    this.observer.setDirection(this.pitch, this.yaw);
    this.observer.setdistance();
  }
}

///////////////Renderer//////////////////

function createRenderer() {
  const renderer = new THREE.WebGLRenderer()
  renderer.setClearColor(0x000000, 1.0)
  renderer.setSize(window.innerWidth, window.innerHeight) // res
  renderer.autoClear = false
  // document.body.appendChild(renderer.domElement)
  mountRef.current.appendChild( renderer.domElement );
  
  return renderer;
}

///////////////Scene/////////////////////

function createScene(renderer) {
  // scene and camera
  const scene = new THREE.Scene()
  // this camera is THREE.js camera fixated at position z=1
  // since drawing happens only with shader on a 2D plane, actual camera control is done by Observer
  const camera = new THREE.Camera()
  camera.position.z = 1

  // render post composing
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera)
  // strength, kernelSize, sigma, res
  // resolution, strength, radius, threshold
  const bloomPass = new UnrealBloomPass(new Vector2(128, 128), 0.8, 2.0, 0.0)
  const shaderPass = new ShaderPass(CopyShader);
  shaderPass.renderToScreen = true;
  composer.addPass(renderPass);
  composer.addPass(bloomPass);
  composer.addPass(shaderPass);
  

  //edit bloompass
  bloomPass.strength = 0.65
  bloomPass.radius = 0.5
  bloomPass.threshold = 0.6

  return {
    scene, composer
  }
}


/////////////Camera///////////////////////

function createCamera(renderer) {
  const observer = new Observer(window.innerWidth / window.innerHeight, 1, 80000)
  const observerOrientation = new ObserverOrientation(observer, renderer.domElement) // take care of camera view
  return {
    observer, observerOrientation
  }
}

///////////////Texture////////////////////

function loadTextures() {
  const textures = new Map();
  const textureLoader = new THREE.TextureLoader()
  const loadTexture = (name, image, interpolation, wrap = THREE.ClampToEdgeWrapping) => {
    textures.set(name, null);
    textureLoader.load(image, (texture) => {
      texture.magFilter = interpolation
      texture.minFilter = interpolation
      texture.wrapT = wrap
      texture.wrapS = wrap
      textures.set(name, texture);
    })
  }

  // loadTexture('bg1', galaxy.src, THREE.NearestFilter)
  loadTexture('bg1', galaxy.src, THREE.NearestFilter)
  loadTexture('star', stars.src, THREE.LinearFilter)
  loadTexture('disk', disk.src, THREE.LinearFilter)

  window.onbeforeunload = () => {
    for (const texture of textures.values()) {
      texture.dispose();
    }
  }

  return textures;
}

////////////////Shader////////////////////

function createShaderProjectionPlane(uniforms) {

  const shaderDefineConstant = `
        #define STEP ${0.1}
        #define NSTEPS ${175}
    `;

  const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: shaderDefineConstant + fragmentShader,
  })
  material.needsUpdate = true;

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
    material.fragmentShader = shaderDefineConstant + fragmentShader;
    material.needsUpdate = true;

  return {
    mesh
  };
}


// create scene, 3d context, etc.. instances
const renderer = createRenderer()
const { composer, scene } = createScene(renderer);

// init graphics
const textures = loadTextures();
const { mesh } = createShaderProjectionPlane(uniforms);
// add shader plane to scene
scene.add(mesh);

// setup camera
const { observer, observerOrientation } = createCamera(renderer);
// add camera object to scene
scene.add(observer)

// start animation loop
update();


// UPDATING
function update() {
  delta = (Date.now() - lastframe) / 1000
  time += delta

  // window size
  renderer.setPixelRatio(window.devicePixelRatio * performanceResolution)
  renderer.setSize(window.innerWidth, window.innerHeight)
  composer.setSize(window.innerWidth * performanceResolution, window.innerHeight * performanceResolution)

  // update renderer
  observer.update(delta)
  observerOrientation.update(delta)

  // update shader variables
  updateUniforms()

  // render
  composer.render();

  // loop
  requestAnimationFrame(update)
  lastframe = Date.now()
}

function updateUniforms() {
  uniforms.time.value = time
  uniforms.resolution.value.x = window.innerWidth * performanceResolution
  uniforms.resolution.value.y = window.innerHeight * performanceResolution

  uniforms.cam_pos.value = observer.position
  uniforms.cam_dir.value = observer.direction
  uniforms.cam_up.value = observer.up
  uniforms.fov.value = observer.fov

  uniforms.cam_vel.value = observer.velocity

  uniforms.bg_texture.value = textures.get('bg1')
  uniforms.star_texture.value = textures.get('star')
  uniforms.disk_texture.value = textures.get('disk')

};

return () => mountRef.current && mountRef.current.removeChild(renderer.domElement);

  }, []);

  return (
    <div ref={mountRef}>

    </div>
  );
}

export default Background;