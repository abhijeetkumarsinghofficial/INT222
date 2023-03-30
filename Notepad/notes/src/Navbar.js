import React from 'react'
import './style.css';
import AddIcon from './add.png';
const Navbar = () => {
  return (
    <div className='navmain' >
      <div className='add'> <img src={AddIcon} alt="My Image" />  </div>
      <div className='nav'>Keeper</div>
    </div>
    
  )
}

export default Navbar