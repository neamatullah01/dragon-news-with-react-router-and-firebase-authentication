import React, { use } from "react";

const categoryPromise = fetch("categories.json").then((res) => res.json());
const Categories = () => {
  const category = use(categoryPromise);
  return (
    <div>
      <h1 className="font-bold">ALL Categories {category.length}</h1>
    </div>
  );
};

export default Categories;
