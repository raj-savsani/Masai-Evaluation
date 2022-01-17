import React, { useEffect, useState } from "react";

function Dashboard() {

  const [jobs, setJobs] = useState([]);
  console.log('jobs:', jobs)

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
    </div>
  );
}

export default Dashboard;
