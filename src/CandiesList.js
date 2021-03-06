import React from 'react';
import CandyItem from './CandyItem';
import './CandiesList.css';

export default function CandiesList(props) {
  return <div className="candies-list">
    <p>{props.candies.map((candy, i) => <CandyItem key={candy, i} candyName={candy} />)}
    </p>
  </div>;
}
