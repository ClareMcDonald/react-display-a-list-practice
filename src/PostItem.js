import React from 'react';

export default function PostItem({
  questionProp,
  userProp,
  repliesProp
}) {
  return <div className="post-item">
    <p>{questionProp}</p>
    <p>{userProp}</p>
    <p>{repliesProp}</p>
  </div>;
}

