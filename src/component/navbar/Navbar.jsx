import React from 'react'
import Mobilenavbar from './Mobilenavbar'
import PcNavbar from './PcNavbar'

const Navbar = () => {
  return (
    <div className='navbar'>
          <Mobilenavbar/>
          <PcNavbar/>
    </div>
  )
}

export default Navbar
