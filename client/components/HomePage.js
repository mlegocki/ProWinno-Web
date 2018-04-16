import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class HomePage extends Component {
  render() {

    return (
      <div>
        <button type="button" class="btn btn-primary">Primary</button>
      </div>
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

export default withRouter(connect(mapState, mapDispatch)(HomePage))
