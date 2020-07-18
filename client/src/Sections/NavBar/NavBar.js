import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

//NavBar is going to be responsible for holding the section titles and when clicked on moves the user to the respective section
//Needs to have the list of sections:
// 1) Summary 
// 2) Projects - Personal Projects 
// 3) Download - Resume & Cover Letter
// 4) Contact - Ask for Name, Company, Method of contact

//inline the nav bar and flex box the logo and the tags 

const NavBar = () => {

    const [show, setShow] = useState(false);

    const displaySections = show ? 'toggle-display' : 'toggle-none';
    const showIcon = show ? 'menu-close' : 'menu-toggle';
    const sections = [{ name: '', content: <img src={'https://d1bx69z06fa2ip.cloudfront.net/eg-logo.png'} alt='logo' className='logo' /> },
    { name: "summary", content: "Summary" },
    { name: "projects", content: "Projects" },
    { name: "download", content: "Download" },
    { name: "contact", content: "Contact" }];

    return <nav className='navbar'>
        <div className={`nav-contents ${displaySections}`}>
            <ul>
                {sections.map((item, i) => <li key={i}><Link to={(item.name) ? `/${item.name}` : '/'}>{item.content} </Link></li>)}
            </ul>
            <span className={showIcon} onClick={() => setShow(!show)}></span>
        </div>

    </nav >
}

export default NavBar;