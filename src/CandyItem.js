import React from 'react';
import './CandiesList.css';

export default function CandyItem(props) {
  return <div className="candy-item">
    <p>{props.candyName}</p>
  </div>;
}

