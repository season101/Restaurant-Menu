import React from 'react';

const Categories = ({ ourCategories, filterMenu }) => {
  return (
    <div className="btn-container">
      {ourCategories.map((category, key) => {
        return (
          <button
            type="button"
            className="btn"
            key={key}
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
