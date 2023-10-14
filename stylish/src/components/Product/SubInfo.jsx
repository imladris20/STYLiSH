import styled from "styled-components";
import { devices } from "../../assets/device";
import React from "react";

const SubInfoContainer = styled.div`
  color: #3f3a3a;
  margin: 28px 0 0 0;
  text-align: left;
  word-wrap: break-word;
  line-height: 24px;
  font-size: 14px;

  @media ${devices.desktopS} {
    margin-top: 40px;
    margin-left: 6px;
    line-height: 30px;
    font-size: 20px;
    height: 240px;
  }
`;

const SubInfo = ({ note, texture, description, wash, place }) => {
  const split = description.split(/\r\n/);

  const newDescription = split.map((element, index) => {
    return (
      <React.Fragment key={index}>
        {element}
        <br />
      </React.Fragment>
    );
  });

  return (
    <SubInfoContainer>
      {note}
      <br />
      <br />
      {texture}
      <br />
      {newDescription}
      <br />
      清洗：{wash}
      <br />
      產地：{place}
    </SubInfoContainer>
  );
};

export default SubInfo;
