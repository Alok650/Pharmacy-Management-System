import React from 'react';
import {useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import {TR, TD, BUTTON} from './report/tableStyle'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Medicinedata() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Medicine data</Title>
      <Table>
        <TR><TD style ={{width:"70%"}}>Sort by Quantity</TD><TD><BUTTON to = '/stock/qtySort'>Continue</BUTTON></TD></TR>
        <TR><TD style ={{width:"70%"}}>Sort by Expiry Date</TD><TD><BUTTON to = '/stock/expirySort'>Continue</BUTTON></TD></TR>
        <TR><TD style ={{width:"70%"}}>See shelf-life of Medicines</TD><TD><BUTTON to = '/stock/shelfLife'>Continue</BUTTON></TD></TR>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href ='/'onClick={(e) => {
      e.preventDefault();
      window.location.href='/customerdata';
      }}>
          See complete list
        </Link>
      </div>
    </React.Fragment>
    
  );
}


// const Medicinedata = () =>{
//     var [sr_no, setSr_no] = useState(1);
//     var med_name = ""
//     var qty_left = ""
//     var med_cost = ""
//     var exp_date = ""
//     var med_mfg = ""
//     var rac_loc = ""
//     var mfg_date = ""
//     var rows = [];
//     console.log(sr_no);
//     const meddata = ()=>{
//     axios.post('http://localhost:1300/medicines/stock/search', {      
//       sr_no: sr_no,  
//     })
//       .then(res => {
//               console.log(res);
//               if(res.data){
//                 console.log("success")
//                 med_name= res.data[0].med_name;
//                 qty_left= res.data[0].qty_left;
//                 med_cost =res.data[0].med_cost;
//                 exp_date= res.data[0].exp_date;
//                 med_mfg= res.data[0].med_mfg;
//                 rac_loc= res.data[0].rac_loc;
//                 mfg_date= res.data[0].mfg_date;
//                 // alert(`Medicine found! 
//                 //         \n1. Medicine Name: ${med_name}
//                 //         \n2. Quantity Left: ${qty_left}
//                 //         \n3. Price: ${med_cost}
//                 //         \n4. Expiry Date: ${exp_date}
//                 //         \n5. Manufacturing Date: ${mfg_date}
//                 //         \n6. Location on Rack: ${rac_loc}
//                 //         \n7. Manufacturer: ${med_mfg}
//                 //         `);
                         
//               }
//               else
//               {
//                 alert("Request denied.")
//               }
//     })
//       .catch(error => {
//                 console.log("we have an error in catch",error);
//               alert("Invalid ID")
//     })
  
// }

// // rows = [
// //     createData(1,`${med_name}`, `${qty_left}`, `${exp_date}`,`${med_cost}`, `${mfg_date}`,`${med_mfg}`),
// //     createData(2, 'U19CS103', 'ESHAN AGARWAL', '19', '110001','eshan@gmail.com'),
// //     createData(3, 'U19CS115', 'KESHAV GAUTAM', '19', '110023','keshav@gmail.com'),
// //     createData(4, '80012334', 'ADMIN', '0', '000000','admin@gmail.com'),
// //     createData(4, '80012334', 'ADMIN', '0', '000000','admin@gmail.com'),
// //     createData(4, '80012334', 'ADMIN', '0', '000000','admin@gmail.com'),
// //     createData(4, '80012334', 'ADMIN', '0', '000000','admin@gmail.com'),
// //     createData(4, '80012334', 'ADMIN', '0', '000000','admin@gmail.com'),
// //     createData(4, '80012334', 'ADMIN', '0', '000000','admin@gmail.com'),
// //     createData(4, '80012334', 'ADMIN', '0', '000000','admin@gmail.com'),
  
// //   ];

// function preventDefault(event) {
//   event.preventDefault();
// }

// const useStyles = makeStyles((theme) => ({
//   seeMore: {
//     marginTop: theme.spacing(3),
//   },
// }));

// //  const Medicinedata =()=> {
//   const classes = useStyles();
//   return (
//     <React.Fragment>
//       <Title>Recent Medicine</Title>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Serial No.</TableCell>
//             <TableCell>Medicine Name</TableCell>
//             <TableCell>Expiry Date</TableCell>
//             <TableCell>Quantity Left</TableCell>
//             <TableCell>Cost</TableCell>
//             <TableCell>Mfg Date</TableCell>
//             <TableCell>Manufacturer</TableCell>
//           </TableRow>
//         </TableHead>
//         {/* <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.sr_no}>
//               <TableCell>{row.med_name}</TableCell>
//               <TableCell>{row.exp_date}</TableCell>
//               <TableCell>{row.qty_left}</TableCell>
//               <TableCell>{row.med_cost}</TableCell>
//               <TableCell>{row.mfg_date}</TableCell>
//               <TableCell>{row.med_mfg}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody> */}
//         {/* <TableBody>
//             <TableRow key={sr_no}>
//               <TableCell>{med_name}</TableCell>
//               <TableCell>{row.exp_date}</TableCell>
//               <TableCell>{row.qty_left}</TableCell>
//               <TableCell>{row.med_cost}</TableCell>
//               <TableCell>{row.mfg_date}</TableCell>
//               <TableCell>{row.med_mfg}</TableCell>
//             </TableRow>
          
//         </TableBody> */}
//       </Table>
//       <div className={classes.seeMore}>
//         <Link color="primary" href="/" onClick={preventDefault}>
//           See complete list
//         </Link>
//       </div>
//     </React.Fragment>
    
//   );

// }
// export default Medicinedata

