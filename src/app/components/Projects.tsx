import "../../style/Projects.css"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Interactive from "../../../public/Assets/Static interactive resume.jpg"
import Dynamic from "../../../public/Assets/dynamic resume.jpg"
import Facebook from "../../../public/Assets/facebook pic.jpg"




const Projects = () => {
  return (
    <div id="project" className="projects-wrapper">
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              My Projects
            </h1>
          </div>
          <div className="projects-list">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <Image
                  alt="gallery"
                  className="image-cover"
                  src={Interactive}
                />
              </div>
              <div className="project-details">
                <h2 className="project-category">
                  Static Interactive resume
                </h2>
                <h1 className="project-title">
                  Static Resume
                </h1>
                <p className="project-description">
                  This is a Static Interactive resume that I have created for others to take ideas.
                </p>
                <Link href={'https://milestones-sage.vercel.app/'} target='_blank'>
                  <p className="project-link">
                    View project..
                  </p>
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <Image
                  alt="gallery"
                  className="image-cover"
                  src={Dynamic}
                />
              </div>
              <div className="project-details">
                <h2 className="project-category">
                  Dynamic Resume
                </h2>
                <h1 className="project-title">
                  Dynamic Resume
                </h1>
                <p className="project-description">
                  This is a Dynamic resume that I have created to generate resumes.
                </p>
                <Link href={'https://milestone-3-rouge-gamma.vercel.app/'} target='_blank'>
                  <p className="project-link">
                    View project..
                  </p>
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-image">
                <Image
                  alt="gallery"
                  className="image-cover"
                  src={Facebook}
                />
              </div>
              <div className="project-details">
                <h2 className="project-category">
                  Facebook Clone Page
                </h2>
                <h1 className="project-title">
                  Facebook clone
                </h1>
                <p className="project-description">
                  I have created a Facebook Clone Page for my own practice.
                </p>
                <Link href={'https://facebook-clone-seven-mu.vercel.app/'} target='_blank'>
                  <p className="project-link">
                    View project..
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
