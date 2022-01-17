import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Dashboard() {
  const [jobs, setJobs] = useState([]);
//   console.log("jobs:", jobs);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    try {
      fetch("http://localhost:3006/jobs")
        .then((res) => res.json())
        .then((data) => {
          setJobs(data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <JobDiv>
        {jobs.map((job) => (
          <div key={job.id}>
            <h3>Company: {job.company}</h3>
            <p>Post: {job.title}</p>
            <p>Salary: {job.salary}</p>
            <p>{job.description}</p>
            <p>Location: {job.location}</p>
            <p>Type: {job.job_type}</p>
            <button>Apply</button>
          </div>
        ))}
      </JobDiv>
    </div>
  );
}

export default Dashboard;

const JobDiv = styled.div`
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(4, 20%);
  grid-gap: 5%;
  text-align: left;
`;
