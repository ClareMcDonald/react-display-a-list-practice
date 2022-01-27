import React from 'react';
import { homegoods } from './homegoods-data';
import PostItem from './PostItem';

export default function PostsList(props) {
  return <div className="posts-list">
    <p>{props.posts.map((post, i) => <PostItem key={post, i} questionProp={post.question} userProp={post.user} repliesProp={post.replies} />)}</p>
  </div>;
}

