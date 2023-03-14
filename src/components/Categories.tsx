import React from "react";

interface Props {
  categories: string[];
  filterItems: (category: string) => void;
}

const Categories = ({ categories, filterItems }: Props) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
