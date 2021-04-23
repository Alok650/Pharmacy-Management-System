import {useState} from 'react';
import { FrmWrap, FrmContent, Formadd, FormInputadd, FormH1add, FormButtonadd} from '../customerStyle'

const Addmedicine = () => {
  const [med_name, setMed_name] = useState("");
  const [qty_left, setQty_left] = useState("");
  const [med_cost ,setMed_cost] = useState("");
  const [exp_date,setExp_date] = useState("");
  const [med_mfg, setMed_mfg] = useState("");
  const [rac_loc, setRac_loc] = useState("");
  const [mfg_date, setMfg_date] = useState("");


  const addmed = () =>{
    console.log(med_name);
    fetch("http://localhost:1300/medicines/stock/insert",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                med_name:med_name,
                qty_left : qty_left,
                med_cost:med_cost,
                exp_date:exp_date,
                med_mfg:med_mfg,
                rac_loc:rac_loc,
                mfg_date: mfg_date
            })
        })
        // .then(res=> res.json())
        .then(data=>{
          console.log(data);
          console.log("success");
          alert("Medicine added successfully!");
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
            <FormH1add>Add new medicine in stock</FormH1add>
              <FormInputadd type = 'text' placeholder = "Medicine name" required onChange ={(event) => {setMed_name(event.target.value)}}/>
              <FormInputadd type = 'number' required placeholder = "Quantity" onChange ={(event) => {setQty_left(event.target.value)}}/>
              <FormInputadd type = 'number' required placeholder = "Cost" onChange ={(event) => {setMed_cost(event.target.value)}}/>
              <FormInputadd type = 'date' required title="Expiry date"  onChange ={(event) => {setExp_date(event.target.value)}}/>
              <FormInputadd type = 'date' required title="Manufacturing Date"  onChange ={(event) => {setMfg_date(event.target.value)}}/>
              <FormInputadd type = 'text' required placeholder = "Rack Location" onChange ={(event) => {setRac_loc(event.target.value)}}/>
              <FormInputadd type = 'text' required placeholder = "Manufacturer" onChange ={(event) => {setMed_mfg(event.target.value)}}/>
            <FormButtonadd onClick = {addmed}>Continue</FormButtonadd> 
          </Formadd>
        </FrmContent>
      </FrmWrap>
    </>
  );
}
export default Addmedicine;
