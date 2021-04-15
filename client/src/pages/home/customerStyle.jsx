import styled from 'styled-components';
import {Link} from 'react-router-dom'



export const Container = styled.div`
display: flex;
flex-wrap : row wrap;
margin-top:50px;
`
export const Content = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`
export const Columnadd = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
export const FrmWrap = styled.div`
margin:30px;
`
export const FrmContent = styled.div`
  display: flex;
  flex-direction: column;

`
export const Frm = styled.form`
  background-color: black;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 30px 32px;
  border-radius:2px;
  `
export const FrmH1 = styled.h1`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-top:20px;
  margin-bottom:30px;
  color: white;
  font-size: 23px;
  font-weight: 400;
  text-align: center;
`
export const FrmLabel = styled.label`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-bottom: 8px;
  font-size: 14px;
  color: white;
`
export const FrmInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`
export const ExfrmInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
  background-color:#FFFFBF
`
export const FrmButton = styled(Link)`
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

export const Formadd = styled.form`
  background-color: navy;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 30px 32px;
  border-radius:2px;
  `
export const FormH1add = styled.h1`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-top:20px;
  margin-bottom:30px;
  color: white;
  font-size: 23px;
  font-weight: 400;
  text-align: center;
`
export const FormLabeladd = styled.label`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-bottom: 8px;
  font-size: 14px;
  color: white;
`
export const FormInputadd = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`
export const FormButtonadd = styled(Link)`
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
export const Position = styled.div`
top:30px;
left:600px;
right:200px;
down:100px;`
export const FormWrap = styled.div`
margin:30px;
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

export const FormH1del = styled.h1`
  font-family: 'Encode Sans Expanded', sans-serif;
  margin-top:140px;
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