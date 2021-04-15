import {useState} from 'react';
import {FrmWrap, FrmContent, Frm, FrmInput, FrmH1,FrmButton, ExfrmInput} from './../customerStyle'
import axios from 'axios'

const Updatecustomer = () => {
  const [fname, setFirstname] = useState("");
  const [lname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateCustomer = () =>{
    axios.post('http://localhost:1300/adminUpdate/adminUpdate', {
                username: username,
                password: password
    })
      .then(res => {
              if(res.data.password===1){
                console.log("success");
                alert("Request successful")
                    axios.post('http://localhost:1300/adminUpdate/adminReset', {
                        fname:fname,
                        lname:lname,
                        age: age,
                        email:email,
                        pincode: pincode,
                        username: username,
                        password: password,
                        })
                        .then(res => {
                            if(res.data.reset===1){
                              alert("Details updated successfully")
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
     <FrmWrap>
        <FrmContent>
          <Frm onsubmit = "redirectLog(e)">
            <FrmH1>Update details</FrmH1>
              <ExfrmInput type = 'text' required placeholder ="Existing username" onChange ={(event) => {setUsername(event.target.value)}}/>
              <ExfrmInput type = 'password' required placeholder ="Existing password" onChange ={(event) => {setPassword(event.target.value)}}/>
              <FrmInput type = 'text' required placeholder ="First name" onChange ={(event) => {setFirstname(event.target.value)}}/>
              <FrmInput type = 'text' required placeholder ="Last name" onChange ={(event) => {setLastname(event.target.value)}}/>
              <FrmInput type = 'number' required placeholder ="Age" onChange ={(event) => {setAge(event.target.value)}}/>
              <FrmInput type = 'number' required placeholder ="Pincode" onChange ={(event) => {setPincode(event.target.value)}}/>
              <FrmInput type = 'email' required placeholder ="Email" onChange ={(event) => {setEmail(event.target.value)}}/>
            <FrmButton onClick = {updateCustomer}>Continue</FrmButton> 
          </Frm>
        </FrmContent>
      </FrmWrap>
    </>
  );
}
export default Updatecustomer;
