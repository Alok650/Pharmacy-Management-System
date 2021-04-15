import {useState} from 'react';
import {FormWrap, FormH1del, FormContent, Form, FormInput, FormH1, FormLabel, FormButton} from './../customerStyle'
import axios from 'axios'
import Divider from '@material-ui/core/Divider';

const Searchcustomer = () => {
  const [username, setUsername] = useState("");
  var fname = "";
  var lname = "";
  var age = "";
  var pincode = "";
  var email = "";
  const Searchcustomer = () =>{
    console.log(username);
    axios.post('http://localhost:1300/searchcustomer/adminsearch', {      
      username: username,  
    })
      .then(res => {
              console.log(res);
              if(res.data){
                console.log("success")
                fname= res.data[0].fname;
                lname= res.data[0].lname;
                age =res.data[0].age;
                email= res.data[0].email;
                pincode= res.data[0].pincode;
                alert(`User found! \n1. Name=${fname} ${lname}\n2. Age=${age}\n3. Email=${email}\n4. Pincode=${pincode}`);
              }
              else
              {
                alert("Request denied.")
              }
    })
      .catch(error => {
                console.log("we have an error in catch",error);
              alert("Invalid ID")
    })
  }

  const Deletecustomer = () =>{
    console.log(username);
    axios.post('http://localhost:1300/searchcustomer/admindelete', {
                username: username,
    })
      .then(res => {
              if(res.data.login===1){
                console.log("success")
                alert("Account deleted successfully!")
              }
              else
              {
                alert("Account deleted.")
              }
    })
      .catch(error => {
                console.log("we have an error in catch",error);
                alert("Account deleted.")
    })
  }
  return (
    <>
    <FormWrap>
       <FormContent>
         <Form>
           <FormH1>Search User</FormH1>
           <FormLabel>Username</FormLabel>
             <FormInput type = 'text' required onChange ={(event) => {setUsername(event.target.value)}}/>
           <FormButton onClick = {Searchcustomer} >Search</FormButton>
           <Divider/>
           <FormH1del>Delete User</FormH1del>
           <FormLabel>Username</FormLabel>
             <FormInput type = 'text' required onChange ={(event) => {setUsername(event.target.value)}}/>
             <FormLabel>Reason</FormLabel>
             <FormInput type = 'text' required/>
           <FormButton onClick = {Deletecustomer} >Delete</FormButton>
         </Form>
       </FormContent>
     </FormWrap>
   </>
  )
}
export default Searchcustomer;

