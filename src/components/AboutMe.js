import React from 'react'
import './Style.css'

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <section className="section-img" id="head">
          <div className="container pt-5">
            <div className="overlay-content text-center">
              <h1 className="mt-5 mb-3"> Stephen Broadhurst </h1>
              <h5> Javascript / Web App Developer </h5>
            </div>
          </div>
        </section>
        <section className="section-text" id="intro">
          <div className="container">
            <h1> About me: </h1>
            <h2>Hey, I'm Stephen.</h2>
            <p>Long paragraph about me and what I do</p>
          </div>
        </section>
      </div>
    )
  }
}

export default AboutMe
