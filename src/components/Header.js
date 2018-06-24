import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Github from '../assets/Github'
import LinkedIn from '../assets/LinkedIn'

const styles = {
  root: {
    flexGrow: 1
  },
  button: {
    margin: 20
  },
  toolbarButtons: {
    marginLeft: 'auto'
  },
  toolbar: {
    //position: 'fixed !important',
    position: 'static'
  }
}

function Header(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar style={styles.toolbar} color="default">
        <Toolbar>
          <Button href="/" className={classes.button}>
            Stephen Broadhurst
          </Button>
          <Button href="#work" className={classes.button}>
            Projects / Work
          </Button>
          <Button href="#resume" className={classes.button}>
            Resume
          </Button>
          <Button href="#contact" className={classes.button}>
            Contact Me
          </Button>
          <div className={classes.toolbarButtons}>
            <IconButton className={classes.button}>
              <a
                href="https://github.com/sbroadhurst"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            </IconButton>
            <IconButton className={classes.button}>
              <a
                href="https://linkedin.com/in/stephen-broadhurst-349145166"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />{' '}
              </a>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
