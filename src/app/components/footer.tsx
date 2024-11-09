import "../../style/footer.css"
import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../../public/Assets/logo.jpeg"

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-container">
          <a className="logo-container">
            <Image 
              src={Logo}
              width={100}
              height={100}
              alt="logo"
              className="logo-image"
            />
            <span className="logo-text">Warisha Naz</span>
          </a>
          <p className="footer-text">
            © 2020 Warisha Naz
          </p>
          <span className="social-container">
            <Link
              target="_blank"
              href={"https://www.instagram.com/aris.ha4/"}
              className="social-link"
            >
              <IoLogoInstagram className="social-icon" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
