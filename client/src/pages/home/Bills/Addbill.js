import axios from 'axios';
import {useState} from 'react';
import { FrmWrap, FrmContent, Formadd, FormInputadd, FormH1add, FormButtonadd} from '../customerStyle'

const Addbill = () => {
  const [sr_no, setSr_no] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [C_ID, setC_ID] = useState(0);

  const addMed = () =>{
    fetch("http://localhost:1300/transaction/insert/addmed",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
              sr_no: sr_no,
              quantity:quantity,
              C_ID: C_ID
            })
        })
        // .then(res=> res.json())
        .then(data=>{
          if(data.status == 404)
            alert("OUT OF STOCK!");
          else{
          console.log("success");
          console.log(data);
          alert("Added in cart!");
          }
        })
        .catch(err=>{
          alert("Error occured!");
            console.log("we have an error in catch",err);
        })
      }

      const addBill = ()=>{
        fetch("http://localhost:1300/transaction/insert/genbill",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                C_ID: C_ID
            })
        })
        // .then(res=> res.json())
        .then(data=>{
          console.log(data);
          console.log("success");
          alert("Insertion successful!");
        })
        .catch(err=>{
            console.log("we have an error in catch",err);
        })
      }


      const subBill = ()=>{
        var C_ID;
          var billno;
          var billdate;
          var totalcost;
        // fetch("http://localhost:1300/transaction/insert/submit",{
        //     method:"post",
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({
        //         C_ID: C_ID
        //     })
        // })
        axios.post("http://localhost:1300/transaction/insert/submit",
            )
        // .then(res=> res.json())
        .then(res=>{
            console.log(res.data[0])
                C_ID= res.data[0].C_ID;
                billdate= res.data[0].billdate;
                billno= res.data[0].billno;
                totalcost= res.data[0].totalcost;
               
          console.log(res);
          console.log("success");
          alert(`Bill Data!
          \n1. Bill number: ${billno}
          \n2. Total cost: ${totalcost}
          \n3. Customer ID: ${C_ID}
          \n3. Bill date: ${billdate}`);
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
            <FormH1add>Add new bill</FormH1add>
            <FormInputadd type = 'number' required placeholder = "Customer ID" onChange ={(event) => {setC_ID(event.target.value)}}/>
            <FormButtonadd onClick = {addBill}>Create new Bill</FormButtonadd> <br/>
            <FormInputadd type = 'number' placeholder = "Medicine serial no." required onChange ={(event) => {setSr_no(event.target.value)}}/>
            <FormInputadd type = 'number' required placeholder = "Quantity" onChange ={(event) => {setquantity(event.target.value)}}/>
            <FormButtonadd onClick = {addMed}>Add in cart</FormButtonadd> <br/>
            <FormButtonadd onClick = {subBill}>Submit</FormButtonadd> 
          </Formadd>
        </FrmContent>
      </FrmWrap>
    </>
  );
}
export default Addbill;
