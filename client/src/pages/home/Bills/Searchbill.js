import {useState} from 'react';
import {FormWrap, FormH1delete, FormContent, Form, FormInput, FormLabel, FormButton} from '../customerStyle'
import axios from 'axios'

const Searchbill = () =>{
    const [billno, setbillno] = useState(0);
    //console.log(sr_no);

    const lookBill = ()=>{
    axios.post('http://localhost:1300/transaction/seachBill', {
                billno: billno
    })
      .then(res => {
        console.log(res);
              if(res.data){
                var C_ID= res.data.C_ID;
                var billdate= res.data.billdate;
                var billno= res.data.billno;
                var totalcost= res.data.totalcost;
                var medname = res.data.med_name;
                var medcost = res.data.med_cost;
                var qty = res.data.quantity;
                var srno = res.data.sr_no;
                console.log("success", res);
                alert(`1. Customer ID:${C_ID}\n 2. Bill date:${billdate}\n 3. Bill number:${billno}\n 4. Totalcost:${totalcost}\n 5.Medicine name: ${medname}\n 6.Medicine cost: ${medcost}\n 7.Quantity: ${qty}\n 8.Serial Number: ${srno}\n`)
              }
              else
              {
                alert("Bill not found.")
              }
    })
      .catch(error => {
                console.log("we have an error in catch",error);
    })
  }
  
  

  return (
    <>
    <FormWrap>
       <FormContent>
         <Form>
           <FormH1delete>Search Bill from database</FormH1delete>
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