import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TD = styled.td`
border:1px solid black;
font-family: arial, sans-serif;
padding: 20px 50px;
font-size: 15px;
`

export const TR = styled.tr`
border:1px solid black;
`

export const BUTTON = styled(Link)`
  font-family: 'Encode Sans Expanded', sans-serif;
  border-radius: 5px;
  background: green;
  padding: 16px 50px;
  white-space: nowrap;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  z-index:1;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`