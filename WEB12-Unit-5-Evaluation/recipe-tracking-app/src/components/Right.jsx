import React from "react";
import styled from "styled-components";

function Right({ recipes, setRecipes, setShow }) {
  const showData = (item) => {
    setShow(item);
  };
  return (
    <RightDiv>
      <h1>List Of Recipe</h1>
      {recipes.map((item) => (
        <div key={item.id} onClick={() => showData(item)}>
          <h2>Title: {item.title}</h2>
          <h3>Cooking time: {item.time}</h3>
        </div>
      ))}
    </RightDiv>
  );
}

const RightDiv = styled.div`
  margin-top: 100px;
  width: 600px;
  height: 200px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

export default Right;
