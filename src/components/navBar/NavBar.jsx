import React from 'react';
//css import
import "./navBar.css";
//config imports
import { BrandIcon, CHAT, CONTACT, DESKTOP, MEET, MOBILE, PANEL, PHONE, SETTINGS, TEAMS, VOICE_MAIL } from "../../lib/config";
//component imports
import ListItem from "../listItem/ListItem";

function NavBar() {
  return (
    <div className='w-full h-full flex justify-center content-between flex-wrap'>
      <div className='w-full'>
        <header className='header-navBar'>
          <img src={BrandIcon} alt="Brand Logo" className='header-logo'/>
        </header>
        <nav className='navBar'>
          <ul>
            <ListItem label="Team" icon={TEAMS} extraClass={"mr-2"}/>
            <ListItem label="Chat" icon={CHAT} extraClass={"mr-2"}/>
            <ListItem label="Meet" icon={MEET} extraClass={"mr-2"}/>
            <ListItem label="Call" icon={PHONE} extraClass={"mr-2"}/>
            <ListItem label="Panel" icon={PANEL} extraClass={"mr-2"}/>
            <ListItem label="Contacts" icon={CONTACT} extraClass={"mr-2"}/>
            <ListItem label="Voicemail" icon={VOICE_MAIL} extraClass={"mr-2"}/>
            <ListItem label="Settings" icon={SETTINGS} extraClass={"mr-2"}/>
          </ul>
        </nav>
      </div>
      <footer className='footer-tabs-navbar w-full'>
        <ListItem label="Web App" icon={DESKTOP} extraClass={"mr-2"}/>
        <ListItem label="Mobile App" icon={MOBILE} extraClass={"mr-2"}/>
      </footer>
    </div>
  )
}

export default NavBar;