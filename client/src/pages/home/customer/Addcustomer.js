import {useState} from 'react';
import { FrmWrap, FrmContent, Formadd, FormInputadd, FormH1add, FormButtonadd} from './../customerStyle'

const Addcustomer = () => {
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
          alert("Registration successful!");
        })
        .catch(err=>{
            console.log("we have an error in catch",err);
        })
      }

  return (
    <>
     <FrmWrap>
        <FrmContent>
          <Formadd onsubmit = "redirectLog(e)">
            <FormH1add>Add new customer</FormH1add>
              <FormInputadd type = 'text' placeholder = "First name" required onChange ={(event) => {setFirstname(event.target.value)}}/>
              <FormInputadd type = 'text' required placeholder = "Last name" onChange ={(event) => {setLastname(event.target.value)}}/>
              <FormInputadd type = 'number' required placeholder = "Age" onChange ={(event) => {setAge(event.target.value)}}/>
              <FormInputadd type = 'number' required placeholder = "Pincode" onChange ={(event) => {setPincode(event.target.value)}}/>
              <FormInputadd type = 'email' required placeholder = "Email" onChange ={(event) => {setEmail(event.target.value)}}/>
              <FormInputadd type = 'text' required placeholder = "Username" onChange ={(event) => {setUsername(event.target.value)}}/>
              <FormInputadd type = 'password' required placeholder = "Password" onChange ={(event) => {setPassword(event.target.value)}}/>
            <FormButtonadd onClick = {addUser}>Continue</FormButtonadd> 
          </Formadd>
        </FrmContent>
      </FrmWrap>
    </>
  );
}
export default Addcustomer;
