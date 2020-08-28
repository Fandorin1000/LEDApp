import React, { Component } from 'react'
import classes from './AboutContainer.module.scss';
import About from '../../components/About/About';

class AboutContainer extends Component {
  render() {
    return (
      <div className={classes.aboutContainer}>
        <About />
      </div>
    )
  }

}
export default AboutContainer;