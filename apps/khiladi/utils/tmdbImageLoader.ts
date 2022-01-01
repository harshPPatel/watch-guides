export const tmdbImageLoader = ({ src, width }) => {
  const finalWidth = width <= 300 ? 'w300' : width <= 780 ? 'w780' : 'original';
  return `https://www.themoviedb.org/t/p/${finalWidth}/${src}`;
};
