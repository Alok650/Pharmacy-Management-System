import styled from 'styled-components';
// #038ea1

export const Headline = styled.div`
  background-color: #2980B9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 120px;
  position: relative;
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
export const HeadH2 = styled.h2`
  font-size: 30px;
  font-family: Montserrat;
  border: 1px solid black;
  padding: 15px;
  @media screen and (max-wodth: 768px) {
    font-size: 20px
  }
  @media screen and (max-wodth: 480px) {
    font-size: 18px
  }
`