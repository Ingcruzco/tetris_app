import styled from 'styled-components';
import bg from '../../images/bg.png';
export const StyledTetrisWrapper = styled.div`
  background-image:url(${bg}),radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
  overflow: hidden;
  position: relative;
  font-family:Pixel, Arial, Helvetica, sans-serif;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
