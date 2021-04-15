import React, {useState} from 'react'
import Footer from './components/Footer';
import Hero from './components/Hero'
import Info from './components/Info'
import { homeObjOne} from './components/Info/Data';
import Navbar from './components/Navbar'
import Services from './components/Services';
import Sidebar from './components/SideBar'
import './index.css'
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <Info {...homeObjOne}/>
      <Services />
      <Footer />
    </>
  )
}

export default Home
