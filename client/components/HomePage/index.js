import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import HomePageRow from './HomePageRow';

export const HomePage = (props) => {
  const { projects } = props;
  return (
    <div className='master-container'>
      {
        projects.map(project =>
          <HomePageRow key={project._id} project={project} />
        )
      }
    </div>
  )
}

const mapState = (state) => {
  return {
    projects: state.projects
  }
}

export default withRouter(connect(mapState, null)(HomePage))
