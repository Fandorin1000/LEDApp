import React, { Component } from 'react'
import classes from './FooterContainer.module.scss';
class FooterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      telephones: ['+380666666666', '+380666666666', '+380666666666']
    }
  }
  render() {
    const contacts = this.state.telephones.map((element, index) => <a key={index} href={"tel:" + { element }} > {element}</a >)
    return (
      <div className={classes.footerContainer}>
        <h2>Хоть какой-то футер</h2>
        <h2>Наши контакты</h2>
        <div className={classes.footerContactsBox}>
          <ul className={classes.footerContactsList}>
            {contacts}
          </ul>
        </div>
      </div>
    )
  }
}

export default FooterContainer;