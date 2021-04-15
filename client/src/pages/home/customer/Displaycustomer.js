import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';

// Generate Order Data
function createData(id, username, name, age, pincode, email) {
  return {id,  username, name, age, pincode, email };
}

const rows = [
  createData(1,'U19CS119', 'ALOK PRASAD', '19', '801108','alokp650@gmail.com'),
  createData(2, 'U19CS103', 'ESHAN AGARWAL', '19', '110001','eshan@gmail.com'),
  createData(3, 'U19CS115', 'KESHAV GAUTAM', '19', '110023','keshav@gmail.com'),
  createData(4, 'U19CS124', 'RAHUL PATEL', '40', '123321','rahul@gmail.com'),

];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Customerdata() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Customers</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Pincode</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.pincode}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="/" onClick={preventDefault}>
          See complete list
        </Link>
      </div>
    </React.Fragment>
    
  );
}

