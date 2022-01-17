import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../Context/Auth";

function Login() {
  const [form, setForm] = useState({});

  const { handleToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const getToken = () => {
    try {
      fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(({ token }) => {
          handleToken(token);
          if (token === "QpwL5tke4Pnpja7X4") {
            navigate("/listjob");
          } else {
            navigate("/dashboard");
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        <input
          name="email"
          type="text"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="text"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <button
          onClick={() => {
            getToken();
          }}
        >
          Sign in
        </button>
      </Form>
    </div>
  );
}

export default Login;

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
