import React from "react";

function Right({ recipes, setRecipes, setShow }) {
  const showData = (item) => {
    setShow(item);
  };
  return (
    <div>
      {recipes.map((item) => (
        <div key={item.id} onClick={() => showData(item)}>
          <h2>Title: {item.title}</h2>
          <h3>Cooking time: {item.time}</h3>
        </div>
      ))}
    </div>
  );
}

export default Right;
