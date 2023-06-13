import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
      <nav className="navbar ">
        <div className="navbar-logo">
          <p>Logo</p>
        </div>
        <ul className="navbar-links">
          {['Home', 'About', 'Tokenomics', 'Contact'].map((item) => (
            <li className="" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
  
        <div className="navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
  
          {toggle && (
            <div>
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['Home', 'About', 'Tokenomics', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
}

export default Navbar