import {useState} from 'react';
import {FormWrap, FormH1del, FormContent, Form, FormInput, FormH1, FormLabel, FormButton} from '../customerStyle'
import axios from 'axios'
import Divider from '@material-ui/core/Divider';

const Deletemedicine = () =>{
    const [sr_no, setSr_no] = useState(0);
    console.log(sr_no);

    const deleteMed = ()=>{
    axios.post('http://localhost:1300/medicines/stock/delete', {
                sr_no: sr_no,
    })
      .then(res => {
              if(res){
                console.log("success")
                alert("Account deleted successfully!")
              }
              else
              {
                alert("Account not found.")
              }
    })
      .catch(error => {
                console.log("we have an error in catch",error);
                alert("Account not deleted.")
    })
  }
  

  return (
    <>
    <FormWrap>
       <FormContent>
         <Form>
           <FormH1del>Delete Medicine from stock</FormH1del>
           <FormLabel>Medicine serial no.</FormLabel>
             <FormInput type = 'number' required onChange ={(event) => {setSr_no(event.target.value)}}/>
             <FormLabel>Reason</FormLabel>
             <FormInput type = 'text' required/>
           <FormButton onClick = {deleteMed} >Delete</FormButton>
         </Form>
       </FormContent>
     </FormWrap>
   </>
  )
}

export default Deletemedicine;