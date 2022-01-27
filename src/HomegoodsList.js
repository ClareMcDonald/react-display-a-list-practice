import React from 'react';
import HomegoodItem from './HomegoodItem';
import './HomegoodsList.css';

export default function HomegoodsList(props) {
  return <div className="homegoods-list">
    <p>{props.homegoods.map((homegood, i) => <HomegoodItem key={homegood, i} typeProp={homegood.type} purposeProp={homegood.purpose} makerProp={homegood.maker}/>)}</p>
  </div>;
}
