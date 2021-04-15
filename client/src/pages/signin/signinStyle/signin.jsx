import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.div`
display: flex;
flex-wrap : row wrap;
margin-top:20px;
`
export const FormWrap = styled.div`
position: relative;  
width: 300px;   
left: 250px;
bottom:20px;
`
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;

`
export const Form = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 30px 32px;
  border-radius:2px;
  `
export const FormH1 = styled.h1`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-top:10px;
  margin-bottom:30px;
  color: black;
  font-size: 23px;
  font-weight: 400;
  text-align: center;
`
export const FormLabel = styled.label`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-bottom: 8px;
  font-size: 14px;
  color: black;
`
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`
export const AddButton = styled(Link)`
  font-family: 'Encode Sans Expanded', sans-serif;
  border-radius: 2px;
  background:red;
  white-space: nowrap;
  padding: padding: 16px 0px;
  color:#fff;
  margin-top: 20px;
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

export const Createbutton = styled(Link)`
  font-family: 'Encode Sans Expanded', sans-serif;
  width : ;
  height: 18%;
  border-radius: 5px;
  background: green;
  white-space: nowrap;
  padding: 16px 30px;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin-left:550px;
  z-index:1;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  '#fff' : 'green')};

  }
`
export const Text = styled.span`
text-align: center;
color: black;
font-size: 14px;
`
export const ImgWrap = styled.div`
  max-width: 600px;
  height: 95%;
  position: relative; 
  width: 600px;   
  left: 100px;
  top : 30px;
`;
export const Img = styled.img`
  width: 100%;
  padding-right: 10;
`;

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

export const Tnc = styled.div`
display: flex;
flex-flow:row;
justify-const:space-around`

export const CheckInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
  margin-right:10px;
  margin-left: 10px;
  `