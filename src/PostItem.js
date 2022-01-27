import React from 'react';
import PostReplyItem from './PostReplyItem';

export default function PostItem({
  questionProp,
  userProp,
  repliesProp
}) {
  return <div className="post-item">
    <p>{questionProp}</p>
    <p>{userProp}</p>
    <p>{repliesProp.map((reply, i) => <PostReplyItem key={reply, i} reply={reply}/>)}</p>
  </div>;
}

