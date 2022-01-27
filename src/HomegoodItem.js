import React from 'react';

export default function HomegoodItem({
  typeProp,
  purposeProp,
  makerProp
}) {
  return <div className='homegood-item'>
    <p>{typeProp}</p>
    <p>Purpose: {purposeProp}</p>
    <p>Maker: {makerProp.name}, {makerProp.age}</p>
  </div>;
}

