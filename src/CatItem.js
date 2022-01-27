import React from 'react';

export default function CatItem({
  catName, 
  catAge,
  catColor
}) {
  return <div className="cat-item">
    <p>I have a cat named {catName}. She is {catAge} years old, and her coloring is {catColor}.</p>
  </div>;
}

