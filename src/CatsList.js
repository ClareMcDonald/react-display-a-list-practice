import React from 'react';
import CatItem from './CatItem';
import './CatsList.css';

export default function CatsList(props) {
  return <div className="cats-list">
    <p>{props.cats.map((cat, i) => <CatItem key={cat, i} catName={cat.name} catAge={cat.age} catColor={cat.color} />)}
    </p>
  </div>;
}

