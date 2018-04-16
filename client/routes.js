import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from './components'
import { loadProjects } from './store'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
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
    loadInitialData() {
      dispatch(loadProjects())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)
