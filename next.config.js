const isGithubActions = process.env.GITHUB_ACTIONS || false;
const isGithubPages = false;

let basePath;
let assetPrefix;

// Set basePath and assetPrefix if hosted on GitHub Pages
if (isGithubActions && isGithubPages) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  assetPrefix,
  reactStrictMode: false,
  transpilePackages: ['echarts', 'zrender'],

  // Image loader configuration
  images: {
    loader: 'imgix',
    path: 'https://sws.imgix.net/',
  },

  // Extend webpack configuration
  webpack: (config, { isServer }) => {
    // Add a rule for .glsl files using raw-loader
    config.module.rules.push({
      test: /\.glsl$/,
      use: 'raw-loader',
    });

    // Return the modified config
    return config;
  },
};

module.exports = nextConfig;
