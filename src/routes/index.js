import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Work from '../components/Work'
import Contact from '../components/Contact'
//import Resume from '../components/Resume'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route path="/work" component={Work} />
            {/* <Route path="/resume" component={Resume} /> */}
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    )
  }
}
