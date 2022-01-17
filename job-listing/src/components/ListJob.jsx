import React, { useState } from "react";
import styled from "styled-components";

function ListJob() {
  const [form, setForm] = useState({});

  const handleSubmit = () => {
    fetch("http://localhost:3006/jobs", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
  };
  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <h1>List Job</h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        <input
          name="company"
          type="text"
          placeholder="Enter Company Name"
          onChange={handleChange}
        />
        <input
          name="title"
          type="text"
          placeholder="Enter Job Title"
          onChange={handleChange}
        />
        <input
          name="salary"
          type="text"
          placeholder="Enter Salary Range"
          onChange={handleChange}
        />
        <input
          name="description"
          type="text"
          placeholder="Enter Job Description"
          onChange={handleChange}
        />
        <input
          name="location"
          type="text"
          placeholder="Enter Job Location"
          onChange={handleChange}
        />
        <input
          name="job_type"
          type="text"
          placeholder="Enter Job Type"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>List Job</button>
      </Form>
    </div>
  );
}

export default ListJob;

const Form = styled.form`
  width: 300px;
  heigth: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  div {
    margin-top: 50px;
  }
  input {
    margin: 2%;
    font-size: 25px;
  }
  button {
    border-radius: 15px;
    outline: none;
    border-color: #557c55;
    margin: 40px;
    font-size: 25px;
    background-color: #a3da8d;
  }
`;
