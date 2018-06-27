import React from 'react'
import './Style.css'
import Github from '../assets/Github'
import LinkedIn from '../assets/LinkedIn'
import Email from '../assets/Email'
import Phone from '../assets/Phone'
import IconButton from '@material-ui/core/IconButton'

class Contact extends React.Component {
  render() {
    return (
      <section className="section-img" id="contact">
        <div className="container pt-5">
          <div className="contact-content text-center">
            <h1 className="mb-3"> Contact Me! </h1>
            <h5> Email, Phone, and/or Website </h5>
            <div>
              <IconButton>
                <a
                  href="https://github.com/sbroadhurst"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
              </IconButton>
              Github
              <IconButton>
                <a
                  href="https://linkedin.com/in/stephen-broadhurst-349145166"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </a>
              </IconButton>
              LinkedIn
            </div>
            <div>
              <IconButton>
                <a href="mailto:stepbro31@gmail.com" data-rel="external">
                  <Email />{' '}
                </a>{' '}
              </IconButton>
              stepbro31@gmail.com
            </div>
            <IconButton>
              <a href="tel:1231231234" data-rel="external">
                <Phone />
              </a>
            </IconButton>
            (407) 416-3579
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
