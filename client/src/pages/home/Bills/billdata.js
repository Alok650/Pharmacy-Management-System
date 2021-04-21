import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Title from './../Title';
import {TR, TD, BUTTON} from './../customer/report/tableStyle'
// Generate Order Data


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Billdata() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Bill data</Title>
      <Table>
        <TR><TD style ={{width:"70%"}}>Transaction sorted according to bill date.</TD><TD><BUTTON to = '/sorttransaction'>Continue</BUTTON></TD></TR>
        <TR><TD style ={{width:"70%"}}>Transasction sorted according to billing amount</TD><TD><BUTTON to = '/transactiontotal'>Continue</BUTTON></TD></TR>
        <TR><TD style ={{width:"70%"}}>Today's transactions</TD><TD><BUTTON to = '/transactiontoday'>Continue</BUTTON></TD></TR>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href ='/'onClick={(e) => {
      e.preventDefault();
      window.location.href='/alltransactions';
      }}>
          See complete list
        </Link>
      </div>
    </React.Fragment>
    
  );
}

