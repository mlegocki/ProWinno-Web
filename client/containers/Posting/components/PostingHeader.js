import React from 'react';

const PostingHeader = (props) => {
  const { currentPosting } = props;
  return (
    <div>
      <div>{currentPosting.title}</div>
      <div>{currentPosting.author}</div>
      <div>{currentPosting.location}</div>
      <div>Posted on: {currentPosting.date}</div>
    </div>
  )
}

export default PostingHeader;