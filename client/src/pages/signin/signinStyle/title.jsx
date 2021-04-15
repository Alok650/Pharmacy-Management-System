import styled from 'styled-components';
// #038ea1

export const Headline = styled.div`
background-image: linear-gradient(to right,#00bf8f,#001510 );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 120px;
  position: relative;
  margin-bottom:25px;
  z-index: 1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
`
export const HeadH1 = styled.h1`
  background: #fff;
  font-size: 50px;
  margin-left:30px;
  padding: 15px;
  font-family: Montserrat;
  border: 1px solid #fff;
  border-radius: 0.2rem;
  @media screen and (max-wodth: 768px) {
    font-size: 30px
  }
  @media screen and (max-wodth: 480px) {
    font-size: 20px
  }
`