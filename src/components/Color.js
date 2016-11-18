import React from 'react';

const Color = ({ id, name }) => (
  <li>
    <div
      style={{height: '40px', width: '200px', backgroundColor: 'red'}}><p>{name}</p>
    </div>
  </li>
)

export default Color;
