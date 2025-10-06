import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const category = use(categoryPromise);
  return (
    <div>
      <h1 className="font-bold">ALL Categories</h1>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {category.map((category) => (
          <NavLink
            key={category.id}
            className={
              "btn bg-base-100 border-0 text-accent font-semibold hover:bg-base-200"
            }
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
