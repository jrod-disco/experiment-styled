import bgImg from '../../images/background/laith-abushaar-obcO4zhwDfU-unsplash.jpg';

const themeImages = {
  bgImg,
};

export const lightTheme = {
  fg: '#330033',
  bg: '#aa99aa',
  ...themeImages,
};

export const darkTheme = {
  fg: '#999999',
  bg: '#550055',
  ...themeImages,
};

export const theme = {
  ...lightTheme,
};
