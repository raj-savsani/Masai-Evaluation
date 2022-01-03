import React from 'react';
import './App.css';
import Left from './components/Left';

function App() {
  const [recipes, setRecipes] = React.useState([]);
  return (
    <div className="App">
      <Left recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default App;
