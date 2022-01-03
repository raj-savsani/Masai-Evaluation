import React from "react";
import styled from "styled-components";
function Below({ show }) {
  //   console.log("show:", show.title);
  return (
    <MainDiv>
      <ImgDiv>
        <img src={show.image_url} alt="food"></img>
      </ImgDiv>

      <DataDiv>
        <h1>{show.title}</h1>
        <h3>Ingredients: {show.ingredients}</h3>
        <h3>{show.time}</h3>
      </DataDiv>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
`;
const ImgDiv = styled.div`
  display: inline-block;
  width: 500px;
  img {
    width: 90%;
  }
`;
const DataDiv = styled.div`
  display: inline-block;
`;

export default Below;
