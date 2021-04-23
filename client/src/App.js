import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Registration from './pages/registration';
import SignIn from './pages/signin';
import Dashboard from './pages/home/Dashboard';
import Customer from './pages/home/customer/Customer.js';
import Medicine from './pages/home/Meds/Medicine.js';
import Bills from './pages/home/Bills/Bills.js';
import ForgotPassword from './pages/ForgotPass'
import Home from './pages/info';
import React from "react";
import GetFulltable from './pages/home/customer/report/fullTable'
import covidVaccine from './pages/home/customer/report/above45'
import recentcustomers from './pages/home/customer/report/recentcustomers'
import customercount from './pages/home/customer/report/customerCount'
import Sorttrans from './pages/home/Bills/report/sortedtransaction'
import Transtotal from './pages/home/Bills/report/sorttotalcost'
import Transtoday from './pages/home/Bills/report/transactiontoday'
import AllTransactions from './pages/home/Bills/report/fullTable'
import Getmedtable from './pages/home/Meds/report/fullTable'
import Getqtytable from './pages/home/Meds/report/qtyTable'
import GetshelfLife from './pages/home/Meds/report/shelfLife'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignIn} exact />
        <Route path='/registration' component={Registration} exact />
        <Route path = '/forgotpassword' component={ForgotPassword} exact />
        <Route path = '/home' component={Dashboard} exact />
        <Route path = '/customer' component={Customer} exact />
        <Route path = '/medicine' component={Medicine} exact />
        <Route path = '/bills' component={Bills} exact />
        <Route path='/code' component={() => { 
          window.location.href = 'https://github.com/keshavga1209/DBMS_Project'; 
            return null;
            }}/>
        <Route path = '/customerdata' component={GetFulltable} exact />
        <Route path = '/covidList' component={covidVaccine} exact />
        <Route path = '/recentcustomers' component={recentcustomers} exact />
        <Route path = '/customercount' component={customercount} exact />
        <Route path = '/sorttransaction' component={Sorttrans} exact />
        <Route path = '/transactiontotal' component={Transtotal} exact />
        <Route path = '/transactiontoday' component={Transtoday} exact />
        <Route path = '/alltransactions' component={AllTransactions} exact />
        <Route path = '/stock/expirySort' component={Getmedtable} exact />
        <Route path = '/stock/qtySort' component={Getqtytable} exact />
        <Route path = '/stock/shelfLife' component={GetshelfLife} exact />
      </Switch>
    </Router>
  );
}

export default App;
