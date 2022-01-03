import React from "react";
import styled from "styled-components";
import "./App.css";
import Below from "./components/Below";
import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  const [show, setShow] = React.useState();
  const showData = (item) => {
    setShow(item);
  };
  const [recipes, setRecipes] = React.useState([]);
  return (
    <div className="App">
      <UpperDiv>
        <Left recipes={recipes} setRecipes={setRecipes} />
        <Right recipes={recipes} setRecipes={setRecipes} setShow={setShow} />
      </UpperDiv>
      <BelowDiv>{show ? <Below show={show} /> : null}</BelowDiv>
    </div>
  );
}

const UpperDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BelowDiv = styled.div`
  background-color: #557c55;
  margin: 50px;
`;

export default App;
