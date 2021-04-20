import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Title from './../Title';
import {TR, TD, BUTTON} from './report/tableStyle'
// Generate Order Data


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Customerdata() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Customer data</Title>
      <Table>
        <TR><TD style ={{width:"70%"}}>Customers eligible for covid vaccine, i.e., Age should be above <b>45</b>.</TD><TD><BUTTON to = '/covidList'>Continue</BUTTON></TD></TR>
        <TR><TD style ={{width:"70%"}}>Recently joined customers</TD><TD><BUTTON to = '/recentcustomers'>Continue</BUTTON></TD></TR>
        <TR><TD style ={{width:"70%"}}>Area wise customer count</TD><TD><BUTTON to = '/customercount'>Continue</BUTTON></TD></TR>
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

