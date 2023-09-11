import { useState } from 'react';
import Categories from './Categories';
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
    <main>
      <section className="menu">
        <Title />
        <Categories ourCategories={ourCategories} filterMenu={filterMenu} />
        <Menu ourMenu={ourMenu} />
      </section>
    </main>
  );
};
export default App;
