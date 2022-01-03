import React from "react";

function Below({ show }) {
  console.log("show:", show.title);
  return (
    <div>
      <div>
        <img src={show.image_url} alt="food"></img>
      </div>
      <h1>{show.title}</h1>
      <h3>{show.ingredients}</h3>
      <h3>{show.time}</h3>
    </div>
  );
}

export default Below;
