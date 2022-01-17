import React, { useState } from "react";

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
      <form onSubmit={(e) => e.preventDefault()}>
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
        <input onSubmit={handleSubmit} />
      </form>
    </div>
  );
}

export default ListJob;
