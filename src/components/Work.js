import React from 'react'
import Button from '@material-ui/core/Button'
import movie from '../assets/proj-movie.png'
import pokemon from '../assets/proj-pokemon.png'
import marvel from '../assets/proj-marvel.png'
import breakout2 from '../assets/breakout2.png'
import snake from '../assets/snake-game.png'
import arrows from '../assets/arrowsGame.png'
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
              <a href="http://breakout.sbroadhurst.net" target="_blank" rel="noopener noreferrer">
                Click here
              </a>{' '}
              to play a simple game of Breakout. This game features a ball, paddle, and bricks. If you hit the bottom
              edge of the screen you lose the game. Everytime you destroy a brick your score increases by one. There are
              sound effects when the ball hits the paddle and when the ball hits a brick. When you destroy all the
              bricks you win. Made in pure Javascript. Will be able to upload scores to Firebase and view the
              leaderboard when the game ends.
            </div>
          </article>
          <aside className="aside aside-1">
            <Button type="contained">
              <a href="http://breakout.sbroadhurst.net" target="_blank" rel="noopener noreferrer">
                <img src={breakout2} alt="project-breakout" style={style.projectImage} />
              </a>
            </Button>
          </aside>
        </div>
        <div className="wrapper">
          <article className="main">
            <div className="body">
              <h1> Snake Game </h1>
              <a href="http://snake.sbroadhurst.net" target="_blank" rel="noopener noreferrer">
                Click here
              </a>{' '}
              to play a simple game of Snake. This game features a grid system where the goal is to get as long as
              possible without losing. If you touch your tail or hit the wall the game ends. Made in pure Javascript.
              Will be able to upload scores to Firebase and view the leaderboard when the game ends.
            </div>
          </article>
          <aside className="aside aside-1">
            <Button type="contained">
              <a href="http://snake.sbroadhurst.net" target="_blank" rel="noopener noreferrer">
                <img src={snake} alt="project-snake" style={style.projectImage} />
              </a>
            </Button>
          </aside>
        </div>
        <div className="wrapper">
          <article className="main">
            <div className="body">
              <h1> Musical Arrows Game </h1>
              <a href="http://arrows.sbroadhurst.net" target="_blank" rel="noopener noreferrer">
                Click here
              </a>{' '}
              to play a game that tests your reflexs. Select a diffuculty at the start menu then be prepared to press
              the corresponding arrow keys in time. There is music playing the background, with different songs for each
              diffculty. Select the all diffculty to run through all the songs. Upload and view highscores via the
              leaderboard.
            </div>
          </article>
          <aside className="aside aside-1">
            <Button type="contained">
              <a href="http://arrows.sbroadhurst.net" target="_blank" rel="noopener noreferrer">
                <img src={arrows} alt="project-arrows" style={style.projectImage} />
              </a>
            </Button>
          </aside>
        </div>
      </div>
    )
  }
}

export default Work
