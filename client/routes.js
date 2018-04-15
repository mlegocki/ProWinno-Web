import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from './components'

class Routes extends Component {
  componentDidMount() {
  }

  render() {

    return (
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    )
  }
}

const mapState = (state) => {
  return {
  }
}

const mapDispatch = (dispatch) => {
  return {
  }
}

export default connect(mapState, mapDispatch)(Routes)
