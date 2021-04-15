import {useState} from 'react';
import {FrmWrap, FrmContent, Frm, FrmInput, FrmH1,FrmButton} from '../customerStyle'
import axios from 'axios'

const Updatecustomer = () => {
    const [sr_no, setSr_no] = useState("");
    const [med_name, setMed_name] = useState("");
    const [qty_left, setQty_left] = useState("");
    const [med_cost ,setMed_cost] = useState("");
    const [exp_date,setExp_date] = useState("");
    const [med_mfg, setMed_mfg] = useState("");
    const [rac_loc, setRac_loc] = useState("");
    const [mfg_date, setMfg_date] = useState("");

  const updateMed = () =>{
    axios.put('http://localhost:1300/medicines/stock/update', {
                sr_no: sr_no,
                med_name: med_name,
                qty_left : qty_left,
                med_cost:med_cost,
                exp_date:exp_date,
                med_mfg:med_mfg,
                rac_loc:rac_loc,
                mfg_date: mfg_date
    })
      .then(data=>{
        console.log(data);
        if(!data)
            alert("Medicine not found");
        else{
        console.log("success");
        alert("Medicine updated successfully!");
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
            <FrmInput type = 'number' required placeholder = "Serial number" onChange ={(event) => {setSr_no(event.target.value)}}/>
              <FrmInput type = 'text' placeholder = "Medicine name" required onChange ={(event) => {setMed_name(event.target.value)}}/>
              <FrmInput type = 'number' required placeholder = "Quantity" onChange ={(event) => {setQty_left(event.target.value)}}/>
              <FrmInput type = 'number' required placeholder = "Cost" onChange ={(event) => {setMed_cost(event.target.value)}}/>
              <FrmInput type = 'date' required placeholder = "Expiry date" onChange ={(event) => {setExp_date(event.target.value)}}/>
              <FrmInput type = 'date' required placeholder = "Mfg Date" onChange ={(event) => {setMfg_date(event.target.value)}}/>
              <FrmInput type = 'text' required placeholder = "Rack Location" onChange ={(event) => {setRac_loc(event.target.value)}}/>
              <FrmInput type = 'text' required placeholder = "Manufacturer" onChange ={(event) => {setMed_mfg(event.target.value)}}/>
            <FrmButton onClick = {updateMed}>Update!</FrmButton> 
          </Frm>
        </FrmContent>
      </FrmWrap>
    </>
  );
}
export default Updatecustomer;
