import React from 'react';
import { useTheme } from 'styled-components';

import { StyledBackdrop } from './styled';

interface Props {
  themeOverride?: {};
}

export const Backdrop = (props: Props) => {
  const currentTheme = useTheme();
  const themeOverride = props.themeOverride || {};
  const mergedTheme = { ...currentTheme, ...themeOverride };

  return (
    <>
      <StyledBackdrop theme={mergedTheme}>Foo</StyledBackdrop>
    </>
  );
};
