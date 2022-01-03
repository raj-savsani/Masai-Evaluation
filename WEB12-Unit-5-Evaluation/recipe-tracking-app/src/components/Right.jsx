import React from "react";

function Right({ recipes, setRecipes,showData }) {
  return (
    <div>
      {recipes.map((item) => (
        <div key={item.id} OnClick={() => showData(item)}>
          <h2>Title: {item.title}</h2>
          <h3>Cooking time: {item.time}</h3>
        </div>
      ))}
    </div>
  );
}

export default Right;
