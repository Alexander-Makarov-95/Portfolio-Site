import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: StitchesCss
  width?: number
  height?: number
}

const ThreejsIcon = ({ color, css, width, height }: Props) => {
  return (
    <Box
      as="svg"
      fill="none"
      strokeLinecap="square"
      strokeMiterlimit="10"
      viewBox="0 0 226.77 226.77"
      css={{ stroke: `$${color}`, width, height, ...css }}
    >
      <title>Three.js logo</title>
      <g transform="translate(8.964 4.2527)" fillRule="evenodd" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="4">
        <Box as="path" d="M63.02 200.61L19.807 25.67l173.23 49.874z" css={{ stroke: `$${color}` }} />
        <Box as="path" d="M106.39 50.612l21.591 87.496-86.567-24.945z" css={{ stroke: `$${color}` }} />
        <Box as="path" d="M84.91 125.03l-10.724-43.465 43.008 12.346z" css={{ stroke: `$${color}` }} />
        <Box as="path" d="M63.458 38.153l10.724 43.465-43.008-12.346z" css={{ stroke: `$${color}` }} />
        <Box as="path" d="M149.47 62.93l10.724 43.465-43.008-12.346z" css={{ stroke: `$${color}` }} />
        <Box as="path" d="M84.915 125.06l10.724 43.465-43.008-12.346z" css={{ stroke: `$${color}` }} />
      </g>
    </Box>
  );
};

export default ThreejsIcon;
