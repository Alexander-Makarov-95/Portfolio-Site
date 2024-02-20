import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: StitchesCss
  width?: number
  height?: number
}

const SqlIcon = ({ color = 'black', css, width, height }: Props) => {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 240"
      css={{ width, height, ...css }}
    >
      <title>SQL Database Logo</title>
      <defs>
        <style type="text/css">
          {`#black {
            fill: ${color};
          }
          @media (prefers-color-scheme: dark) {
            #black {
              fill: white;
            }
          }`}
        </style>
      </defs>

      <ellipse cx="120" cy="50" ry="35" rx="85" style={{ fill: 'none', stroke: '#df6c20', strokeWidth: '15' }} />
      <path d="m35,50 v150  a 85,35 1 1 0 170,0 v-150 m-170,50  a 85,35 1 1 0 170,0 m-170,50 a 85,35 1 1 0 170,0" style={{ fill: 'none', stroke: '#df6c20', strokeWidth: '15' }} />
      <path d="m300,100 a 25,25 1 1 0 -50,0 a 20,25 1 0 0 25,25 a 20,25 1 0 1 20,25 a 25,25 1 0 1 -50,-5" style={{ fill: 'none', stroke: '#df6c20', strokeWidth: '15' }} />
      <path d="m375,175 a 50,50 1 1 1 15,-5 m-15,-20 l30,40" style={{ fill: 'none', stroke: '#df6c20', strokeWidth: '15' }} />
      <path d="m440,70 v80  a 25,25 1 0 0 25,25 h20" style={{ fill: 'none', stroke: '#df6c20', strokeWidth: '15' }} />
    </Box>
  );
};

export default SqlIcon;
