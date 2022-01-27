import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  color: ${({ theme, ...themeOverride }) => theme.fg};
  background: ${({ theme, ...themeOverride }) => theme.bg};
`;
