import {useState} from 'react';
import {FormWrap, FormH1del, FormContent, Form, FormInput, FormH1, FormLabel, FormButton} from '../customerStyle'
import axios from 'axios'
import Divider from '@material-ui/core/Divider';

const Deletebill = () =>{
    const [billno, setbillno] = useState(0);
    //console.log(sr_no);

    const delBill = ()=>{
    axios.post('http://localhost:1300/transaction/delete', {
        billno: billno
    })
      .then(res => {
              if(res){
                console.log("success")
                alert("Bill deleted successfully from Transaction table!")
              }
              else
              {
                alert("Bill not found.")
              }
    })
      .catch(error => {
                console.log(billno);
                console.log("we have an error in catch",error);
                alert("Account not deleted.")
    })
  }
  

  return (
    <>
    <FormWrap>
       <FormContent>
         <Form>
           <FormH1del>Delete Bill from database</FormH1del>
           <FormLabel>Bill number</FormLabel>
             <FormInput type = 'number' required onChange ={(event) => {setbillno(event.target.value)}}/>
           <FormButton onClick = {delBill} >Delete</FormButton>
         </Form>
       </FormContent>
     </FormWrap>
   </>
  )
}

export default Deletebill;