import React from "react";
import styled from "styled-components";
import { devices } from "../../assets/device";

const Top = styled.ul`
  row-gap: 8px;
  column-gap: 36px;
  align-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  width: 177px;
  height: 76px;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;

  @media ${devices.desktopS} {
    width: 670px;
    height: 22px;
    align-content: center;
    gap: 0px;
    justify-content: unset;
    flex-direction: row;
  }
`;

const FooterLinkItem = styled.li`
  line-height: 20px;
  @media ${devices.desktopS} {
    flex: 1;
    line-height: 22px;
  }
`;

const FooterLinkText = styled.a`
  color: lightgrey;
  cursor: pointer;
  @media ${devices.desktopS} {
    color: whitesmoke;
  }
`;

const FooterLinkDevider = styled.li`
  color: lightgrey;
  display: none;
  @media ${devices.desktopS} {
    display: initial;
  }
`;

const FooterLinkList = () => {
  const links = ["關於 STYLiSH", "服務條款", "隱私政策", "聯絡我們", "FAQ"];

  const arr = links.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <FooterLinkItem>
          <FooterLinkText>{item}</FooterLinkText>
        </FooterLinkItem>
        {index !== 4 ? <FooterLinkDevider>|</FooterLinkDevider> : null}
      </React.Fragment>
    );
  });

  return <Top>{arr}</Top>;
};

export default FooterLinkList;
