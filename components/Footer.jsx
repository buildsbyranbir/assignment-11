import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content mt-auto">
      <aside>
        <div className="font-bold text-2xl mb-2">ScholarStream</div>
        <p>Providing financial aid solutions since 2024.<br/>Copyright © 2024 - All right reserved</p>
      </aside> 
      <nav>
        <header className="footer-title">Services</header> 
        <a className="link link-hover">Branding</a> 
        <a className="link link-hover">Design</a> 
        <a className="link link-hover">Marketing</a> 
        <a className="link link-hover">Advertisement</a>
      </nav> 
      <nav>
        <header className="footer-title">Company</header> 
        <a className="link link-hover">About us</a> 
        <a className="link link-hover">Contact</a> 
        <a className="link link-hover">Jobs</a> 
        <a className="link link-hover">Press kit</a>
      </nav> 
      <nav>
        <header className="footer-title">Social</header> 
        <div className="grid grid-flow-col gap-4">
          <a className="text-2xl cursor-pointer">X</a>
          <a className="text-2xl cursor-pointer">FB</a>
          <a className="text-2xl cursor-pointer">IG</a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;