import React from 'react'
import Button from '@material-ui/core/Button'
import movie from '../assets/proj-movie.png'
import pokemon from '../assets/proj-pokemon.png'
import marvel from '../assets/proj-marvel.png'
import breakout2 from '../assets/breakout2.png'
import './FlexCss.css'

const style = {
  projectImage: {
    width: 923 / 3,
    height: 582 / 3
  }
}

class Work extends React.Component {
  render() {
    return (
      <div className="about" id="work">
        <div className="wrapper">
          <article className="main">
            <div className="body">
              <h1> Movie Database Viewer </h1>
              <a href="http://movies.sbroadhurst.net/#/" target="_blank" rel="noopener noreferrer">
                Click here{' '}
              </a>{' '}
              to see my website that displays information about movies and TV shows. You can also view the trailers,
              search by name, and find similar movies or shows. You can also find shows and movies with the same genres.
            </div>
          </article>
          <aside className="aside aside-1">
            <Button type="contained">
              <a href="http://movies.sbroadhurst.net" target="_blank" rel="noopener noreferrer">
                <img src={movie} alt="project-movie" style={style.projectImage} />
              </a>
            </Button>
          </aside>
        </div>
        <div className="wrapper">
          <article className="main">
            <div className="body">
              <h1> Marvel Comics Viewer </h1>
              <a href="http://marvel.sbroadhurst.net/#/" target="_blank" rel="noopener noreferrer">
                Click here
              </a>{' '}
              to see my website which displays a list of popular Marvel heros, villians, and heroines. Each one shows
              information on that character including a brief summary, a image, and a list of their recent comic book
              appearances (if available). You can also view a list of recent comics and check their information
              including the summary, release date, and pricing information.
            </div>
          </article>
          <aside className="aside aside-1">
            <Button type="contained">
              <a href="http://marvel.sbroadhurst.net" target="_blank" rel="noopener noreferrer">
                <img src={marvel} alt="project-marvel" style={style.projectImage} />
              </a>
            </Button>
          </aside>
        </div>
        <div className="wrapper">
          <article className="main">
            <div className="body">
              <h1> Pokemon TCG Viewer </h1>
              <a href="http://pokemon.sbroadhurst.net/#/" target="_blank" rel="noopener noreferrer">
                Click here
              </a>{' '}
              to search for pokemon cards and view the information on them including the attacks, name, HP and legality
              of the card. You can search fast by the pokemon name, or do an advanced search that will allow you to add
              specific fields, such as type and legality.
            </div>
          </article>
          <aside className="aside aside-1">
            <Button type="contained">
              <a href="http://pokemon.sbroadhurst.net" target="_blank" rel="noopener noreferrer">
                <img src={pokemon} alt="project-pokemon" style={style.projectImage} />
              </a>
            </Button>
          </aside>
        </div>
        <div className="wrapper">
          <article className="main">
            <div className="body">
              <h1> Breakout Game </h1>
              <a href="http://breakout.sbroadhurst.net/client/" target="_blank" rel="noopener noreferrer">
                Click here
              </a>{' '}
              to play a simple game of the Breakout. This game features a ball, paddle, and bricks. If you hit the
              bottom edge of the screen you get a game over alert. Everytime you destroy a brick your score increases by
              one. There are sound effects when the ball hits the paddle and when the ball hits a brick. When you
              destroy all the bricks there is a Congratulations alert. Made in pure Javascript.
            </div>
          </article>
          <aside className="aside aside-1">
            <Button type="contained">
              <a href="http://breakout.sbroadhurst.net/client/" target="_blank" rel="noopener noreferrer">
                <img src={breakout2} alt="project-breakout" style={style.projectImage} />
              </a>
            </Button>
          </aside>
        </div>
      </div>
    )
  }
}

export default Work
