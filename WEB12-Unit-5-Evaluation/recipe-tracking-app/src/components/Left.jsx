import React from "react";
import styled from "styled-components";

function Left({recipes,setRecipes}) {
  const [text, setText] = React.useState();
  const handleChange = (e) => {
    const {name, value} = e.target;

    setText({
        ...text,
        [name]:value,
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload={
        ...text
    }

    fetch("http://localhost:3006/recipes",{
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body : JSON.stringify(payload)
    })
    
    // setRecipes([...recipes,])
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" type="text" placeholder="Enter title name" />
        <input onChange={handleChange} name="ingredients" type="text" placeholder="Enter ingredients" />
        <input onChange={handleChange} name="time" type="text" placeholder="Enter time to cook" />
        <input onChange={handleChange} name="image_url" type="text" placeholder="Enter  image url" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Left;

// const Form = styled.form`

// `
