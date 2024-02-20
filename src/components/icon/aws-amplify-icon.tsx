import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  css?: StitchesCss
  width?: number
  height?: number
}

const AwsAmplifyIcon = ({ css, width = 256, height = 191 }: Props) => {
  return (
    <Box
      as="svg"
      width={width}
      height={height}
      viewBox="0 0 256 191"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      css={css}
    >
      <title>Amplify</title>
      <defs>
        <linearGradient x1="100%" y1="22.1718317%" x2="0%" y2="77.8281683%" id="Amplify-linearGradient-1">
          <stop stopColor="#FF9900" offset="0%"></stop>
          <stop stopColor="#FFC300" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g>
        <path d="M55.7091852,158.47619 L127.815882,158.47619 L146.285714,190.984127 L145.765368,190.984127 L0,190.984127 L51.3642878,101.977675 L72.8892597,64.7056839 L91.3696717,96.728228 L55.7091852,158.47619 Z M82.6014712,47.8501573 L100.345402,17.1043291 L200.765899,190.983604 L165.203074,190.983604 L82.6014712,47.8501573 Z M110.221481,0 L145.736961,0 L256,190.984127 L220.439804,190.984127 L110.221481,0 Z" fill="url(#Amplify-linearGradient-1)"></path>
      </g>
    </Box>
  );
};

export default AwsAmplifyIcon;