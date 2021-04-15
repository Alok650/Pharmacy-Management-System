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
      </Switch>
    </Router>
  );
}

export default App;
