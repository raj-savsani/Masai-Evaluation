import React from "react";
import styled from "styled-components";

function Left({ recipes, setRecipes }) {
//   console.log("recipes:", recipes);
  const [text, setText] = React.useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  React.useEffect(() => {
    toGetRecipes();
  }, []);

  const toGetRecipes = () => {
    fetch("http://localhost:3006/recipes")
      .then((res) => res.json())
      .then((res) => setRecipes(res));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...text,
    };

    fetch("http://localhost:3006/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    toGetRecipes();
    // setRecipes([...recipes,])
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h1>Add Recipe</h1>
        <Input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Enter title name"
        />
        <Input
          onChange={handleChange}
          name="ingredients"
          type="text"
          placeholder="Enter ingredients"
        />
        <Input
          onChange={handleChange}
          name="time"
          type="text"
          placeholder="Enter time to cook"
        />
        <Input
          onChange={handleChange}
          name="image_url"
          type="text"
          placeholder="Enter  image url"
        />
        <Input type="submit" />
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 300px;
`;

const Input = styled.input`
  margin: 5px;
  font-size: 20px;
`;

export default Left;
