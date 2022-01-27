import React, { ReactChild } from 'react';
import { useTheme } from 'styled-components';

import { StyledOuterContainer } from './styled';

interface Props {
  children?: ReactChild | ReactChild[];
  themeOverride?: {};
}

export const OuterContainer = (props: Props) => {
  const currentTheme = useTheme();
  const themeOverride = props.themeOverride || {};
  const mergedTheme = { ...currentTheme, ...themeOverride };

  return (
    <StyledOuterContainer theme={mergedTheme}>
      {props.children}
    </StyledOuterContainer>
  );
};
