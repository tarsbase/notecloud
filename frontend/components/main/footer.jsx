import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="name">Alexander Happ</div>
    <ul className="footer-links">
      <li>
        <a href={'https://github.com/brainzilla79'} target="_blank">
          <img src="https://res.cloudinary.com/brainzilla/image/upload/v1506554707/GitHub-Mark-64px_kcj6xx.png" />
        </a>
      </li>
      <li>
        <a
          href={'https://www.linkedin.com/in/alexander-happ-16a33b133/'}
          target="_blank"
        >
          <img src="https://res.cloudinary.com/brainzilla/image/upload/v1506554703/In-2C-66px-TM_dofc6h.png" />
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
