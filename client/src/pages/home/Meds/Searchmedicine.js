import {useState} from 'react';
import {FormWrap, FormH1del, FormContent, Form, FormInput, FormH1, FormLabel, FormButton} from '../customerStyle'
import axios from 'axios'
import Divider from '@material-ui/core/Divider';

const Searchmedicine = () => {
  var [sr_no, setSr_no] = useState(0);
  var med_name = ""
  var qty_left = ""
  var med_cost = ""
  var exp_date = ""
  var med_mfg = ""
  var rac_loc = ""
  var mfg_date = ""
  var Searchmedicin = () =>{
    console.log(sr_no);
    axios.post('http://localhost:1300/medicines/stock/search', {      
      sr_no: sr_no,  
    })
      .then(res => {
              console.log(res);
              if(res.data){
                console.log("success")
                med_name= res.data[0].med_name;
                qty_left= res.data[0].qty_left;
                med_cost =res.data[0].med_cost;
                exp_date= res.data[0].exp_date;
                med_mfg= res.data[0].med_mfg;
                rac_loc= res.data[0].rac_loc;
                mfg_date= res.data[0].mfg_date;
                alert(`Medicine found! 
                        \n1. Medicine Name: ${med_name}
                        \n2. Quantity Left: ${qty_left}
                        \n3. Price: ${med_cost}
                        \n4. Expiry Date: ${exp_date}
                        \n5. Manufacturing Date: ${mfg_date}
                        \n6. Location on Rack: ${rac_loc}
                        \n7. Manufacturer: ${med_mfg}
                        `);
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

//   const Deletecustomer = () =>{
//     console.log(username);
//     axios.post('http://localhost:1300/searchcustomer/admindelete', {
//                 username: username,
//     })
//       .then(res => {
//               if(res.data.login===1){
//                 console.log("success")
//                 alert("Account deleted successfully!")
//               }
//               else
//               {
//                 alert("Account deleted.")
//               }
//     })
//       .catch(error => {
//                 console.log("we have an error in catch",error);
//                 alert("Account deleted.")
//     })
//   }
  return (
    <>
    <FormWrap>
       <FormContent>
         <Form>
           <FormH1>Search Medicine</FormH1>
           <FormLabel>Serial Number</FormLabel>
             <FormInput type = 'text' required onChange ={(event) => {setSr_no(event.target.value)}}/>
           <FormButton onClick = {Searchmedicin} >Search</FormButton>
           <Divider/>
         </Form>
       </FormContent>
     </FormWrap>
   </>
  )
}
export default Searchmedicine;

