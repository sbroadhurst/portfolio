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
            <p>
              I am a young developer who has built up some experience working as
              a JavaScript and Web Application developer. I am constantly
              looking to improve myself and better understand the work
              experience. I work hard for the chance to prove myself in many
              different working environments and I am always willing to learn
              new languages or tools to further myself and become a more
              valuable asset. <br />
              <br /> I have been working almost every day since the age of 15
              and continue to work on myself. I enjoy learning new things and I
              have an educated background. I graduated college from Concordia
              University of Austin in December of 2017 with a Bachelor of
              Science in Computer Science. I have bene working on my skills and
              have put together a few websites that demonstrate what I have
              learned. I am constantly working on new things in my spare time,
              to better understand and have fun with the work that I like to do.{' '}
              <br />
              <br />
              Outside of work, I have a few different interests. I like to: play
              videogames, play card or board games, watch Netflix/Hulu, watch
              anime, and learn new things. I am easy-going and have a great
              sense of humor. I am very reliable and responsible, you can rest
              easy and count on me! If you would like to contact me regarding a
              job opportunity or anything at all, my contact information is down
              below, or you can click on the links to my LinkedIn or GitHub
              account. Thanks for reading!
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default AboutMe
