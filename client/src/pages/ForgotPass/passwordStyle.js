import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background:#E0EAFC;
`
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`
export const Icon = styled(Link)`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 24px;
  background: black;
  border-radius:3px;
  padding: 10px 0px;
  width:240px;
  text-align: center;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`
export const Form = styled.form`
  background-color: #E9E4F0;
  max-width: 380px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius:4px;
  box-shadow: 0 1px 3px rgba( 0, 0, 0, 0.9);
  
  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
  `
export const FormH1 = styled.h1`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-bottom: 40px;
  color: black;
  font-size: 20px;
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
  font-family: 'Encode Sans Expanded', sans-serif;
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`
export const FormButton = styled.button`
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
