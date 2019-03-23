import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

// Containers
import Contacts from './Contacts';
import NewClient from './NewClient';

class ContactsRouter extends Component {
  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <Route path={`${match.path}/cliente/nuevo`} component={NewClient} />
        <Route exact path={match.path} component={Contacts} />
      </Fragment>
    );
  }
}

export default ContactsRouter;
