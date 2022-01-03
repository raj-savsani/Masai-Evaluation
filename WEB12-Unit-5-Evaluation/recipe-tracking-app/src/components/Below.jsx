import React from "react";
import styled from "styled-components";
function Below({ show }) {
  console.log("show:", show.title);
  return (
    <>
      <h2> More Details </h2>
      <MainDiv>
        <ImgDiv>
          <img src={show.image_url} alt="food"></img>
        </ImgDiv>

        <DataDiv>
          <h1>{show.title}</h1>
          <h3>{show.ingredients}</h3>
          <h3>{show.time}</h3>
        </DataDiv>
      </MainDiv>
    </>
  );
}

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImgDiv = styled.div`
  display: inline-block;
  width: 400px;
  img {
    width: 100%;
  }
`;
const DataDiv = styled.div`
  display: inline-block;
`;

export default Below;
