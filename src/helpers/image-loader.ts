import { type ImageLoader } from 'next/image';

export const imageLoader: ImageLoader = ({ src, width, quality }) => {
  /** Transforming a gif file is a premium feature in imgix. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const withProps: string = `https://sws.imgix.net${src}?w=${width}&q=${quality ?? 75}`;

  const withoutProps: string = `${src}`;

  return withoutProps;
};


// export const imageLoader = ({ src, width, quality }) => {
//   // Assuming images are stored in the public/images directory
//   // const localPath = `/images${src}`;
//   // const localPath = `/public${src} `;
//   const localPath = '/public/';


//   return localPath;
// };