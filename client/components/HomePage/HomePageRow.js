import React, { Component } from 'react'

export const HomePageRow = (props) => {
  const { project } = props;
  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  )
}

export default HomePageRow;
