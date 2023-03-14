import React from "react";
import "./index.css";
import items from "./data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = React.useState(items);
  const [categories, setCategories] = React.useState(allCategories);

  function filterItems(category: string) {
    if (category === "all") {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
