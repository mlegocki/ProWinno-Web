import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Routes from '../../routes'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Routes />
    )
  }
}

const mapStateToProps = (state) => {
  const {
    postings,
  } = state.App;

  return {
    postings,
  }
}

const mapDispatchToProps = {
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))