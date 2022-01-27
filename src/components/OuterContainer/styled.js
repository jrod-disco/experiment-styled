import styled from 'styled-components';

const themeBgImg = ({ theme }) => theme.bgImg;
const themeFgColor = ({ theme }) => theme.fg;

export const StyledOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;

  color: ${themeFgColor};
  background-image: url(${themeBgImg});
  background-size: cover;
`;
