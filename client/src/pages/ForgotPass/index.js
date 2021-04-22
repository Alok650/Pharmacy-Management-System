import React, {useState} from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton} from './passwordStyle'
import axios from 'axios'

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("")

  const getPassword = () =>{
    console.log(email);
    console.log(pincode);
    axios.post('http://localhost:1300/forgotpassword/forgotpassword', {
                email: email,
                pincode: pincode,
    })
      .then(res => {
              if(res.data.password===1){
                console.log("success");
                    axios.post('http://localhost:1300/forgotpassword/reset', {
                        email:email,
                        pincode: pincode,
                        password: password,
                        })
                        .then(res => {
                            if(res.data.reset===1){
                              alert("Password reset successful")
                        }
                          else
                            {
                              alert("Request denied.")
                            }
                      })
                        .catch(error => {
                            console.log("we have an error in catch",error);
                      })}
              else
              {
                alert("Login failed.");
              }
            })
              .catch(error => {
              console.log("we have an error in catch",error);
              alert("Invalid data provided")
    })
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/signin'>Back to Login</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Reset lost password</FormH1>
              <FormLabel>Email</FormLabel>
                <FormInput required onChange ={(event) => {setEmail(event.target.value)}}/>
              <FormLabel>Pincode</FormLabel>
                <FormInput required  onChange ={(event) => {setPincode(event.target.value)}}/>
              <FormLabel>New Password</FormLabel>
                <FormInput required  onChange ={(event) => {setPassword(event.target.value)}}/>
              <FormButton onClick = {getPassword}>Reset Password</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default ForgotPassword