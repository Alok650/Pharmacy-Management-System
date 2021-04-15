import React from 'react'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Creators</FooterLinkTitle>
                <FooterLink to= {{ pathname:'https://www.linkedin.com/in/alok-p-200381127/'}} target="_blank">Alok Prasad</FooterLink>
                <FooterLink to= {{ pathname:'https://www.linkedin.com/in/keshav-gautam-862741196/'}} target="_blank">Keshav Gautam</FooterLink>
                <FooterLink to= {{ pathname:'https://www.linkedin.com/in/eshan-agarwal-557418118/'}} target="_blank">Eshan agarwal</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to= {{ pathname:'https://discord.com/'}} target="_blank">Contact</FooterLink>
                <FooterLink to= {{ pathname:'https://discord.com/'}} target="_blank">Support</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Covid-19 data</FooterLinkTitle>
                <FooterLink to= {{ pathname:'https://timesofindia.indiatimes.com/india/coronavirus-lockdown-in-india-covid-19-vaccine-cases-live-updates-12-april-2021/liveblog/82023278.cms'}} target="_blank">In India</FooterLink>
                <FooterLink to= {{ pathname:'https://www.who.int/'}} target="_blank">In world</FooterLink>
                <FooterLink to= {{ pathname:'https://www.mohfw.gov.in/covid_vaccination/vaccination/index.html'}} target="_blank">Vaccination drive</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
          <SocialMediaWrap>
            <WebsiteRights>Created on 12/04/2021</WebsiteRights>
          </SocialMediaWrap>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
