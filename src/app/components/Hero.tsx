"use client";
import "../../style/Hero.css"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profile from "../../../public/Assets/Profile pic.jpg";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-left">
                    <h1 className="hero-title">
                        I am 
                        <br className="hidden-lg" />
                               Account Receptionist, and GIAIC Student
                    </h1>
                    <div className="hero-divider"></div>
                    <p className="hero-description">
                        My name is Warisha Naz and I have done my BBA from PAF KIET University. Now I am Learning Next.js and AI Metaverse.
                    </p>
                    <div className="hero-button-container">
                        <Link href={'#Contact'}>
                            <button className="hero-button">Contact</button>
                        </Link>
                    </div>
                </div>
                <div className="hero-right">
                    <Image
                        className="hero-image"
                        width={150}
                        height={150}
                        alt="hero"
                        src={profile}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
