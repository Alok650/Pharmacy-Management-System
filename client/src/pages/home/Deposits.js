import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import {Link as LinkR} from 'react-router-dom'
import axios from 'axios'

var totalcost=0;


function getCurrentDate(separator=''){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${date}${separator}/${month<10?`0${month}`:`${month}`}/${separator}${year}`
  }

function preventDefault(event) {
  event.preventDefault();
}


axios.get('http://localhost:1300/transaction/todaytotal', {      
    })
      .then(res => {
              console.log(res);
              if(res.data){
                totalcost = res.data[0][0].tot;
                console.log(totalcost);
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
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total sale amount</Title>
      <Typography component="p" variant="h4">
        Rs.{totalcost}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {getCurrentDate()}
      </Typography>
      <div>
        <LinkR to = '/alltransactions' style = {{textDecoration:'none'}}>
          View transaction details
        </LinkR>
      </div>
    </React.Fragment>
  );
}