import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ ourMenu }) => {
  return (
    <div>
      {ourMenu.map((eachMenu) => {
        return <MenuItem key={eachMenu.id} {...eachMenu} />;
      })}
    </div>
  );
};

export default Menu;
