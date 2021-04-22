import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import {Link as LinkR} from 'react-router-dom'
function preventDefault(event) {
  event.preventDefault();
}

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
        Rs.11700
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 04 APRIL 2021
      </Typography>
      <div>
        <LinkR to = '/alltransactions' style = {{textDecoration:'none'}}>
          View transaction details
        </LinkR>
      </div>
    </React.Fragment>
  );
}