import "../../style/Navbar.css"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoCloudDownloadSharp } from "react-icons/io5";
import logo from "../../../public/Assets/logo.jpeg";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <header className="navbar">
        <div className="navbar-container">
          <a className="navbar-logo">
            <Image 
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="navbar-logo-image"
            />
            <span className="navbar-title">Warisha Naz</span>
          </a>
          <nav className="navbar-links">
            <Link href={'/'} className="navbar-link">Home</Link>
            <Link href={'#about'} className="navbar-link">About</Link>
            <Link href={'#skills'} className="navbar-link">Skills</Link>
            <Link href={'#project'} className="navbar-link">Projects</Link>
            <Link href={'#Contact'} className="navbar-link">Contact</Link>
          </nav>
          <a href='/Assets/CV warisha Naz.pdf'>
            <button className="navbar-button">
              Download CV
              <IoCloudDownloadSharp className="navbar-icon" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
