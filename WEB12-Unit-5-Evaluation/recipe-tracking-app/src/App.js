import React from 'react';
import './App.css';
import Below from './components/Below';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  const [show, setShow] = React.useState()
  const showData = (item) => {
    setShow(item);
  }
  const [recipes, setRecipes] = React.useState([]);
  return (
    <div className="App">
      <Left recipes={recipes} setRecipes={setRecipes} />
      <Right recipes={recipes} setRecipes={setRecipes} setShow={setShow}/>
      <Below show={show} />
    </div>
  );
}

export default App;
