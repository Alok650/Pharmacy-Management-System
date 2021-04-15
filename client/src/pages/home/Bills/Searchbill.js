import {useState} from 'react';
import {FormWrap, FormH1del, FormContent, Form, FormInput, FormLabel, FormButton} from '../customerStyle'
import axios from 'axios'

const Searchbill = () =>{
    const [billno, setbillno] = useState(0);
    //console.log(sr_no);

    const lookBill = ()=>{
    axios.post('http://localhost:1300/transaction/lookup/billno', {
                billno: billno
    })
      .then(res => {
              if(res){
                // C_ID= res.data[0].med_name;
                // billdate= res.data[0].qty_left;
                // billno= res.data[0].qty_left;
                // totalcost= res.data[0].qty_left;
                // console.log("success", res);
                //doubts
                alert("Bill deleted successfully from Transaction table!")
              }
              else
              {
                alert("Bill not found.")
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
           <FormH1del>Search Bill from database</FormH1del>
           <FormLabel>Bill number</FormLabel>
             <FormInput type = 'number' required onChange ={(event) => {setbillno(event.target.value)}}/>
           <FormButton onClick = {lookBill} >Search</FormButton>
         </Form>
       </FormContent>
     </FormWrap>
   </>
  )
}

export default Searchbill;