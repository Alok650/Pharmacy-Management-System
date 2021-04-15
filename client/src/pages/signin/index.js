import {useState} from 'react';
import {Headline ,HeadH1} from './signinStyle/title'
import {CheckInput, Tnc, Createbutton, Container, ImgWrap, Img, FormWrap, FormContent, Form, FormInput, FormH1, FormLabel, FormButton,AddButton} from './signinStyle/signin'
import logo from './images/logo.svg'
import loc from './images/location.svg'
import pharma from './images/pharma.png'
import medicine from './images/medicine.png'
// import {Footer, Heading, Contact, Location, Image} from './signinStyle/FooterElements'
import Footer from './signinStyle/Footer'
import axios from 'axios'

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkUser = () =>{
    console.log(username);
    // fetch("http://localhost:1300/signin/authenticate",{
    //         method:"post",
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({
    //             username: username,
    //             password: password,
    //         })
    //     })
        
    //     .then(res=>{
    //           if(res.data.login===1){
    //             console.log("success")
    //             // window.location.href='/home';
    //           }
    //           else
    //           {
    //             alert("Login failed.")
    //           }
    //     })
    //     .catch(err=>{
    //         console.log("we have an error in catch",err);
    //         alert("Invalid ID")
    //       })

    axios.post('http://localhost:1300/signin/authenticate', {
                username: username,
                password: password,
    })
      .then(res => {
              if(res.data.login===1){
                console.log("success")
                window.location.href='/home';
              }
              else
              {
                alert("Login failed.")
              }
    })
      .catch(error => {
                console.log("we have an error in catch",error);
              alert("Invalid ID")
    })
  }

  return (
    <>
    <Headline>
     <HeadH1> Pharmacy Management System</HeadH1>
    </Headline>
    <Createbutton to = '/registration'> Create an account</Createbutton>
    <Container>
    <ImgWrap>
       <Img src={logo} alt={"alt"}/>
     </ImgWrap>
    <FormWrap>
       <FormContent>
         <Form>
           <FormH1>Member Login</FormH1>
           <FormLabel>Username</FormLabel>
             <FormInput type = 'text' required onChange ={(event) => {setUsername(event.target.value)}}/>
             <FormLabel>Password</FormLabel>
             <FormInput type = "password" required onChange ={(event) => {setPassword(event.target.value)}}/>
             <Tnc>
              <CheckInput type = "checkbox"></CheckInput>
              <FormLabel>Remember me</FormLabel>
             </Tnc>
           <FormButton onClick = {checkUser} >Sign in
           {/* to = '/home' */}
           </FormButton>
           <AddButton to ='/forgotpassword'>Forgot password</AddButton>
         </Form>
       </FormContent>
     </FormWrap>
   </Container>
    <Footer/>
   </>
  )
}
export default SignIn;

