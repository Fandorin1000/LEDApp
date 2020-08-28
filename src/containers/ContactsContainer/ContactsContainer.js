import React, { Component } from 'react'
import classes from './ContactsContainer.module.scss';
import Contacts from '../../components/Contacts/Contacts';

class ContactsContainer extends Component {
  render() {
    return (
      <div className={classes.contactsContainer}>
        <Contacts />
      </div>
    )
  }

}
export default ContactsContainer;