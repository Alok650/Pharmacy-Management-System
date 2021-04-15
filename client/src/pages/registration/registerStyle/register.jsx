import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.div`
display: flex;
flex-wrap : row wrap;
margin-top:50px;
`
export const FormWrap = styled.div`
position: relative;  
width: 400px;   
left: 250px;
bottom:20px;
`
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;

`
export const Form = styled.form`
  background-color: black;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 30px 32px;
  border-radius:2px;
  `
export const FormH1 = styled.h1`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-top:20px;
  margin-bottom:30px;
  color: white;
  font-size: 23px;
  font-weight: 400;
  text-align: center;
`
export const FormLabel = styled.label`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-bottom: 8px;
  font-size: 14px;
  color: white;
`
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`
export const Text = styled.span`
text-align: center;
color: black;
font-size: 14px;
`
export const ImgWrap = styled.div`
  max-width: 600px;
  height: 100%;
  position: relative; 
  width: 500px;   
  left: 100px;
  top : 30px;
`;
export const Img = styled.img`
  margin-top:100px;
  width: 100%;
  padding-right: 10;
`;

export const Video = styled.video`
width: 100%;
height: 100%;`

export const FormButton = styled(Link)`
  font-family: 'Encode Sans Expanded', sans-serif;
  border-radius: 2px;
  background:#038ea1;
  white-space: nowrap;
  padding: padding: 16px 0px;
  color:#fff;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  height: 50px;
  width: 100%;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  '#fff' : 'green')};

  }
`

export const Divider = styled.div`
margin-top: 50px;
display: flex;
justify-content:row;
`