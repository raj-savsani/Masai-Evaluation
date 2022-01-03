import React from "react";
import styled from "styled-components";

function Left() {
  const [text, setText] = React.useState();
  const handleChange = (e) => {
      
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Enter title name" />
        <input name="ingredients" type="text" placeholder="Enter ingredients" />
        <input name="time" type="text" placeholder="Enter time to cook" />
        <input name="image_url" type="text" placeholder="Enter  image url" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Left;

// const Form = styled.form`

// `
