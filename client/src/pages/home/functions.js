import React from 'react'
import Icon1 from './../info/images/svg-1.svg'
import Icon2 from './../info/images/svg-2.svg'
import Icon3 from './../info/images/svg-3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './customerStyle'
import {Link as LinkR} from 'react-router-dom'

const Functions = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Features</ServicesH1>
      <ServicesWrapper>
      <LinkR to ='/customer' style = {{textDecoration:'none', color:'black'}}>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>CUSTOMER DETAILS</ServicesH2>
          <ServicesP>Create, delete, update and generate reports.</ServicesP>
        </ServicesCard>
        </LinkR >
        <LinkR to ='/bills' style = {{textDecoration:'none', color:'black'}}>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>TRANSACTION RECORDS</ServicesH2>
          <ServicesP>Create, delete, update and generate reports.</ServicesP>
        </ServicesCard>
        </LinkR>
        <LinkR to ='/medicine' style = {{textDecoration:'none', color:'black'}}>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>MEDICINE RECORDS</ServicesH2>
          <ServicesP>Create, delete, update and generate reports.</ServicesP>
        </ServicesCard>
        </LinkR>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Functions;
