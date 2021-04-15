import {useState} from 'react';
// import axios from 'axios';
import {Headline ,HeadH1, HeadH2} from './registerStyle/title'
import {Video, Container, ImgWrap, Img, FormWrap, FormContent, Form, FormInput, FormH1, FormLabel, FormButton} from './registerStyle/register'
import logo from './images/s2.svg'
import loc from './images/location.svg'
import video from './video/video.mp4'
import pharma from './images/pharma.png'
import medicine from './images/medicine.png'
import {Footer, Heading, Contact, Location, Image} from './registerStyle/FooterElements'

const Registration = () => {
  const [fname, setFirstname] = useState("");
  const [lname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const addUser = () =>{
    console.log(username);
    fetch("http://localhost:1300/register/create",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
              fname: fname,
              lname:lname,
              age:age,
              pincode:pincode,
              email:email,
              username: username,
              password: password,
            })
        })
        // .then(res=> res.json())
        .then(data=>{
          console.log(data);
          console.log("success");
          window.location.href='/signin';
          alert("Registration successful! \n Login using the ID created.");
        })
        .catch(err=>{
            console.log("we have an error in catch",err);
        })
      }

  // const addUser = () =>{
  //   console.log(username);
  //   axios.post('http://localhost:1300/create', {
  //     fname: fname,
  //     lname:lname,
  //     age:age,
  //     pincode:pincode,
  //     email:email,
  //     username: username,
  //     password: passwordHash.generate(password),
  //   }).then(() => {
  //     console.log("success");
  //     window.location.href='/';
  //     alert("Registration successful! \n Login using the ID created.");
  // //   });
  // // };

  return (
    <>
     <Headline>
      <HeadH1> Pharmacy Management System</HeadH1>
     </Headline>
     <Container>
     <ImgWrap>
     <HeadH2> Register today to get medicines at your doorsteps</HeadH2>
      <Video autoPlay loop muted src={video} type='video/mp4' />
      <Img src={logo} alt={"alt"}/>
      </ImgWrap>
     <FormWrap>
        <FormContent>
          <Form onsubmit = "redirectLog(e)">
            <FormH1>Register with us</FormH1>
            <FormLabel>First Name</FormLabel>
              <FormInput type = 'text' required onChange ={(event) => {setFirstname(event.target.value)}}/>
              <FormLabel>Last Name</FormLabel>
              <FormInput type = 'text' required onChange ={(event) => {setLastname(event.target.value)}}/>
              <FormLabel>Age</FormLabel>
              <FormInput type = 'number' required onChange ={(event) => {setAge(event.target.value)}}/>
              <FormLabel>Physical address (pincode)</FormLabel>
              <FormInput type = 'number' required onChange ={(event) => {setPincode(event.target.value)}}/>
              <FormLabel>Email</FormLabel>
              <FormInput type = 'email' required onChange ={(event) => {setEmail(event.target.value)}}/>
            <FormLabel>Username</FormLabel>
              <FormInput type = 'text' required onChange ={(event) => {setUsername(event.target.value)}}/>
              <FormLabel>Password</FormLabel>
              <FormInput type = 'password' required onChange ={(event) => {setPassword(event.target.value)}}/>
            <FormButton onClick = {addUser}>Continue</FormButton> 
            {/* to = '/' */}
          </Form>
        </FormContent>
      </FormWrap>
    </Container>

    <Footer>
    <Image src = {loc} alt = {"alt"}></Image>
    <Location>
    <Heading>Contact details</Heading>
    <Contact>Sunshine hospital</Contact>
    <Contact>Surat city</Contact>
    <Contact>395007</Contact>
    <Contact>Phone number: +91-7428640792</Contact>
    </Location>
    <Image src = {pharma} alt = {"alt"}></Image>
    <Location>
    <Heading>Services</Heading>
    <Contact>Buy medicines</Contact>
    <Contact>Sell medicines</Contact>
    <Contact>Generic medicine distribution</Contact>
    <Contact>Others</Contact>
    </Location>
    <Image src = {medicine} alt = {"alt"}></Image>
    </Footer>
    </>
  );
}
export default Registration;
