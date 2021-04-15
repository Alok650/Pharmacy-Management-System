import React from 'react'
import Icon1 from '../../images/svg-8.svg'
import Icon2 from '../../images/svg-7.svg'
import Icon3 from '../../images/svg-9.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Manage customer details</ServicesH2>
          <ServicesP>We help you create, delete, update and search customer details.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Manage transactions details</ServicesH2>
          <ServicesP>We help you create, delete, update and search transactions as well as generate reports.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Manage medicine records</ServicesH2>
          <ServicesP>Add new medicines, update old ones and delete all expired or out of stock medicines.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
