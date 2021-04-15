const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const forgotpasswordRoute = require('./routes/forgotpassword');
const adminUpdateRoute = require('./routes/adminUpdate');
const searchcustomerRoute = require('./routes/Searchcustomer');
const medicineRoute = require('./routes/medicines.js');
const transactionRoute = require('./routes/transaction.js');

app.use('/register',registerRoute )
app.use('/signin',loginRoute )
app.use('/forgotpassword',forgotpasswordRoute )
app.use('/adminUpdate',adminUpdateRoute)
app.use('/searchcustomer',searchcustomerRoute)
app.use('/medicines',medicineRoute)
app.use("/transaction",transactionRoute);

app.listen(1300, ()=>{
  console.log("listening to 1300")
})