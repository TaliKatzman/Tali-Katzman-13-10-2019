import React from 'react';
import { WiCloudy } from "react-icons/wi";
import ToggleViewController from './ToggleViewController';

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <WiCloudy size={70} />
        <h1 className="heading">My Weather App</h1>
      </div>
      <ToggleViewController />
    </div>
  );
}

export default Header;
