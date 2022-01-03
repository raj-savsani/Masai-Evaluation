import React from "react";
import styled from "styled-components";

function Right({ recipes, setRecipes, setShow }) {
  const showData = (item) => {
    setShow(item);
  };
  return (
    <MainDiv>
      <h1>List Of Recipe</h1>
      <RightDiv>
        {recipes.map((item) => (
          <ItemDiv key={item.id} onClick={() => showData(item)}>
            <h2>Title: {item.title}</h2>
            <h3>Cooking time: {item.time}</h3>
            <hr />
          </ItemDiv>
        ))}
      </RightDiv>
    </MainDiv>
  );
}
const MainDiv = styled.div`
  background-color: #406882;
`;

const RightDiv = styled.div`
  background-color: #6998ab;
  width: 800px;
  height: 300px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

const ItemDiv = styled.div`
  cursor: pointer;
`;

export default Right;
