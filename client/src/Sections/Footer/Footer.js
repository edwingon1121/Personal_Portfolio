import React from 'react';
import './footer.css';

const Footer = (props) => {
  return (
    <div id='footer'>
      <div className="sections">
        <dl>
          <dt><a href='#summary'>Summary</a></dt>
          <dd>Glance about me and my experience</dd>
          <dt><a href="#projects">Projects</a></dt>
          <dd>Personal projects I am working on and have deployed</dd>
          <dt><a href="#download">Download</a></dt>
          <dd>See my Resume and Cover Letter</dd>
          <dt><a href="#contact">Contact</a></dt>
          <dd>Send me a message</dd>
        </dl>
      </div>
      <div className='attribute-icons'><small>Icons made by Freepik from www.flaticon.com</small></div>
      <div className="copyright-statement">
        <small>Copyright © 2020 <b>Edwin Gonzalez.</b> All Rights Reserved.</small>
      </div>

    </div>
  )
}

export default Footer;