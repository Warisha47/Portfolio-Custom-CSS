import "../../style/Contact.css"
import React from 'react'

const Contact = () => {
  return (
    <div id='Contact'>
      <section className="contact-section">
        <div className="container">
          <div className="map-container">
            <iframe
              width="100%"
              height="100%"
              className="map"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1809.306890832486!2d67.19836138837223!3d24.911152327138296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3377ac9bcf671%3A0x4223b3c6cceec090!2sGulshan-E-Jamee%2C%20Model%20Colony%20Surti%20Housing%20Society%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729576656713!5m2!1sen!2s"
              style={{ filter: "contrast(1.2) opacity(0.4)" }}
            />
            <div className="map-content">
              <div className="address">
                <h2>ADDRESS</h2>
                <p>Model Colony, Surti Housing Society</p>
              </div>
              <div className="contact-info">
                <h2>EMAIL</h2>
                <a href="mailto:Warishanaz265@gmail.com">Warishanaz265@gmail.com</a>
                <h2>PHONE</h2>
                <p>033xxxxxx</p>
              </div>
            </div>
          </div>

          <div className="form-container">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">Feel free to contact me</p>
            <form className="contact-form">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
              </div>
              <button className="send-button" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
