import { useState } from 'react';
import Menu from './Menu';
import Title from './Title';
import menu from './data';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [ourMenu, setOurMenu] = useState(menu);
  const [ourCategories, setOurCategories] = useState(allCategories);

  const filterMenu = (category) => {
    if (category === 'all') setOurMenu(menu);
    else {
      const filteredMenu = menu.filter((m) => m.category === category);
      setOurMenu(filteredMenu);
    }
  };

  return (
    <>
      <Title />
      <div className="btn-container">
        {ourCategories.map((category, key) => {
          return (
            <button key={key} onClick={() => filterMenu(category)}>
              {category}
            </button>
          );
        })}
      </div>
      <Menu ourMenu={ourMenu} />
    </>
  );
};
export default App;
