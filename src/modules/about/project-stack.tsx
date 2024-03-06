import Chip from '@/components/chip/chip';
import CornerDotsBox from '@/components/ui/corner-dots-box';
import CornerLinesBox from '@/components/ui/corner-lines-box';
import StitchesIcon from '@/components/icon/stitches-icon';
import { Box, ColoredBox, T } from '@/components/stitches';
import { styled } from 'stitches.config';
import SwiftIcon from '@/components/icon/swift-icon';
import AwsSesIcon from '@/components/icon/aws-ses-icon';
import AwsApiGatewayIcon from '@/components/icon/aws-api-gateway-icon';
import AwsLambdaIcon from '@/components/icon/aws-lambda-icon';
import AwsAmplifyIcon from '@/components/icon/aws-amplify-icon';
import GoogleBigQueryIcon from '@/components/icon/google-big-query-icon';
import CssIcon from '@/components/icon/css-icon';
import Html5Icon from '@/components/icon/html-5-icon';
import UiPathIcon from '@/components/icon/ui-path-icon';
import NextjsIcon from '@/components/icon/nextjs-icon'
import TypeScriptIcon from '@/components/icon/typescript-icon'
import VbNetIcon from '@/components/icon/vbnet-icon'
import ThreejsIcon from '@/components/icon/threejs-icon'
import NodejsIcon from '@/components/icon/nodejs-icon'
import JavascriptIcon from '@/components/icon/javascript-icon';
import PythonIcon from '@/components/icon/python-icon';
import SqlIcon from '@/components/icon/sql-icon';
import RestApiIcon from '@/components/icon/rest-icon';
import ReactIcon from '@/components/icon/react-icon';
import EslintIcon from '@/components/icon/eslint-icon';
import PnpmIcon from '@/components/icon/pnpm-icon';


const ProjectStack = () => {
  return (
    
    <Wrapper>
      <ColoredBox color="cyan14" size="max" >
        {/* <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <T color="cyan1" weight={2}>TOOLS </T>
            <T color="cyan1" weight={1} >MATRIX</T>
          </Box>
        </Box> */}
      </ColoredBox>
      <Box css={{ height: 15 }} />
      <CornerDotsBox/>
        <Background>

          <StackContainer>
            <Chip text = "NEXT.JS" link='https://nextjs.org/'>
              <NextjsIcon color="orange1" width={55} />
            </Chip>
            <Chip text="REACT" link='https://reactjs.org/'>
              <ReactIcon color="gray12" width={24} height={30} />
            </Chip>
            <Chip text="NODE.JS" link='https://nodejs.org/en/about'>
              <NodejsIcon color="green1" width={19} />
            </Chip>
            <Chip text="TYPESCRIPT" link='https://www.typescriptlang.org/'>
              <TypeScriptIcon color="gray12" width={22} height={17} />
            </Chip>
            <Chip text="REST" link='https://en.wikipedia.org/wiki/REST'>
          <RestApiIcon width={24} height={20} />
            </Chip>
            <Chip text="STITCHES" link='https://stitches.dev/'>
              <StitchesIcon color="gray1" size={20} />
            </Chip>
            <Chip text="AWS SES" link='https://aws.amazon.com/ses/'>
              <AwsSesIcon width={24} height={20} />
            </Chip>
            <Chip text = "AWS AMPLIFY" link='https://aws.amazon.com/amplify/'>
              <AwsAmplifyIcon width={24} height={20} />
            </Chip>
            <Chip text = "CSS" link='https://www.w3.org/Style/CSS/'>
          <CssIcon width={24} height={20} />
            </Chip>
            <Chip text = "AWS API GATEWAY" link='https://aws.amazon.com/api-gateway/'>
             <AwsApiGatewayIcon width={24} height={20} />
             </Chip>
            <Chip text = "AWS LAMBDA" link='https://aws.amazon.com/lambda/'>
              <AwsLambdaIcon width={24} height={20} />
             </Chip>
             <Chip text = "GOOGLE BIG QUERY" link='https://cloud.google.com/bigquery'>
               <GoogleBigQueryIcon width={24} height={20} />
             </Chip>
             <Chip text = "SWIFT" link='https://developer.apple.com/swift/'>
               <SwiftIcon width={24} height={25} />
             </Chip>
             <Chip text = "HTML5" link='https://www.w3.org/TR/html5/'>
                <Html5Icon width={24} height={20} />
              </Chip>
              <Chip text = "UIPATH" link='https://www.uipath.com/'>
                <UiPathIcon width={24} height={20} />
             </Chip>
             <Chip text= "THREE.JS" link='https://threejs.org/'>
              <ThreejsIcon color="cyan3" width={25} height={22} />
            </Chip>
            <Chip text= "JAVASCRIPT" link='https://www.javascript.com/'>
              <JavascriptIcon width={25} height={20} />
            </Chip>
            <Chip text="ESLINT" link='https://eslint.org/'>
              <EslintIcon color="gray12" width={65} height={18} />
            </Chip>
            <Chip text = "VB.NET" link='https://learn.microsoft.com/en-us/dotnet/visual-basic/'>
              <VbNetIcon width={22} height={20} />
            </Chip>
            <Chip text= "PYTHON" link='https://www.python.org/'>
              <PythonIcon width={22} height={20} />
            </Chip>
            <Chip text="PNPM" link='https://pnpm.io/'>
              <PnpmIcon color="gray12" secondColor="gray10" width={20} height={20} />
            </Chip>
            <Chip text = "SQL & PL/SQL" link='https://en.wikipedia.org/wiki/SQL'>
              <SqlIcon width={30} />
            </Chip>
          </StackContainer>
        </Background>
        <CornerDotsBox/>
        <Box css={{ height: 20 }} />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  maxWidth: '700x',
});

const Background = styled('div', {
  background: '$cyan14',
  padding: '12px',
});

const StackContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '16px',
});

export default ProjectStack;