import React from 'react';
import './PostsList.css';

export default function PostReplyItem({ reply }) {
  return <div className="reply-item">
    <p>{reply}</p>
  </div>;
}
