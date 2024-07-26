import React from 'react';

import "./header.css";
import { ACCOUNT, APPS, CALL, HAMBURGER, MOON } from '@/lib/config';
import Caller from "@/components/caller/Caller";


function Header() {
  const [ popup, setPopup ] = React.useState(false);

  const handlePopUpTigger = () => setPopup(!popup);

  return (
    <div className='bg-white'>
      <div className='header'>
        <div>
          <img src={HAMBURGER} alt="Menu Icon" width={25} className='menu-Icon' />
        </div>
        <div className='flex gap-4'>
          <img src={MOON} alt="Moon Icon" width={25} />
          <img src={APPS} alt="Apps Icon" width={25} />
          <span className='call-icon' onClick={handlePopUpTigger}>
            <img src={CALL} alt="Call Icon" width={20} className='m-2'/>
          </span>
          <img src={ACCOUNT} alt="Profile Icon" width={35} />
        </div>
      </div>
      <div className='title'>Team</div>
      {!!popup && <Caller handlePopUpTigger={handlePopUpTigger}/>}
    </div>
  )
};

export default Header;