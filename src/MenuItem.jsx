import React from 'react';

const MenuItem = ({ id, title, category, price, img, desc }) => {
  return (
    <div>
      <img src={img} alt="" style={{ height: '175px', width: '175px' }} />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default MenuItem;
