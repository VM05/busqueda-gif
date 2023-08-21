import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
    //setCategories(cat=> [...cat,'Valorant'])
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((categoria) => (
        <GifGrid key={categoria} categoria={categoria} />
      ))}
    </>
  );
};
