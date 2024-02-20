import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: StitchesCss
  width?: number
  height?: number
}

const JavascriptIcon = ({ color, css, width, height }: Props) => {
  return (
    <Box
      as="svg"
      fill="none"
      height={height || "141.53199999999998"}
      viewBox="0 0 124 141.53199999999998"
      width={width || "124"}
      css={{ fill: `$${color}`, ...css }}
    >
      <title>JavaScript logo</title>
      <path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e9ca32" />
      <path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ffde25" />
      <g fill="#fff">
        <path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5z" />
        <path d="M67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z" />
      </g>
    </Box>
  );
};

export default JavascriptIcon;