import React from 'react';

const post = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.text}</p>
      <p>{props.likes}</p>
      <button
        onClick={() => props.vote(props.id, 1)}
      >Upvote</button>
      <button
        onClick={() => props.vote(props.id, -1)}
      >Downvote</button>
    </div>
  )
}

export default post
