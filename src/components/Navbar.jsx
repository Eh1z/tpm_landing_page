import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { images } from '../assets'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [text, setText] = useState("Buy Now");

    const handleClick = () => {
      setText("Coming Soon");
    }

    return (
      <nav className="navbar fixed lg:static bg-[#00000E] ">
        <div className="navbar_logo">
          <img className='w-full' src={images.logo} alt="logo" />
        </div>
        <ul className="navbar_links ">
        <li>
          <Link className='link_text a' to="home_nav">Home</Link>
        </li>
        <li>
          <Link className='link_text a' to="about_nav">About</Link>
        </li>
        <li>
          <Link className='link_text a' to="token_nav">Tokenomics</Link>
        </li>
        <li>
          <Link className='link_text a' to="contact_nav">Contact</Link>
        </li>
        </ul>

        <button className='buy_btn hidden lg:block' onClick={handleClick} >{text}</button>
  
        <div className="navbar_menu"> 
          <HiMenuAlt3  onClick={() => setToggle(true)} />
  
          {toggle && (
            <div>
              <HiX onClick={() => setToggle(false)} />
              <ul>
                <li>
                  <Link className='link_text a' to="home_nav" onClick={() => setToggle(false)} >Home</Link>
                </li>
                <li>
                  <Link className='link_text a' to="about_nav" onClick={() => setToggle(false)}>About</Link>
                </li>
                <li>
                  <Link className='link_text a' to="token_nav" onClick={() => setToggle(false)}>Tokenomics</Link>
                </li>
                <li>
                  <Link className='link_text a' to="contact_nav" onClick={() => setToggle(false)}>Contact</Link>
                </li>
                
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
}

export default Navbar