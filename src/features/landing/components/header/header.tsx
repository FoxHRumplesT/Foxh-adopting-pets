import React from 'react';
import './header.sass';
import mainLogo from '../../../../assets/img/main-logo.svg';
import loginIcon from '../../../../assets/img/login-icon.svg';

export interface HeaderProps {
  
}
 
const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="wrapper-header">
      <div className="logo">
        <img src={mainLogo} alt="Main logo" />
        <h1>Foxh Adopting</h1>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>Find a dog</li>
          <li>How it works</li>
          <li>Adoption info</li>
          <li>Dog care</li>
        </ul>
      </nav>
      <div className="actions">
        <div className="login" onClick={() => {console.log('login click');}}>
          <img src={loginIcon} alt="Login icon" />
        </div>
      </div>
    </header>
  );
}
 
export default React.memo(Header);