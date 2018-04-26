import React from 'react';
import { NavLink } from 'react-router-dom';

export const PostingRow = (props) => {
  const { posting } = props;
  return (
    <NavLink to={`/postings/${posting._id}`} >
      <div className='PostingRow-container'>
        <div className='PostingRow-header'>{posting.title}</div>
        <div className='PostingRow-header'>{posting.author}</div>
        <div className='PostingRow-header'>{posting.location}</div>
        <div className='PostingRow-header'>{posting.description}</div>
        <div className='PostingRow-header'>{posting.industry}</div>
        <div className='PostingRow-header'>Posted on: {posting.date}</div>
      </div>
    </NavLink >
  )
}

export default PostingRow;
