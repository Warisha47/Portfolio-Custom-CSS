import  "../../style/About.css"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import about from"../../../public/Assets/About me.jpeg"


const About = () => {
  return (
    <div id='about'>
      <section className="about-section">
        <div className="container">
          <div className="image-container">
            <Image
              className="image"
              alt="hero"
              src={about}
              width={350}
              height={300}
            />
          </div>
          <div className="text-container">
            <h1 className="title">
              About Me
            </h1>
            <p className="description">
              I have done my Bachelors from PAF KIET University and also I have done an English language course from Linguphile Academy.
            </p>
            <p className="interest">
              I am also seeking knowledge in Artificial Intelligence, Metaverse, and Web 3.0.
            </p>
            <div className="button-container">
              <Link href={'/Assets/CV warisha Naz.pdf'}>
                <button className="cv-button">
                  View Cv
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About