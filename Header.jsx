import React from 'react'
import resim1 from '../img/BasarcanLogo.jpg'
import './header.css'
function Header() {
  return (
    <div className="App">
        <img src={resim1} alt="" className='resim'/>
  
    </div>
  );
}

export default Header;