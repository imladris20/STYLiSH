import React from "react";
import styled from "styled-components";
import { devices } from "../../assets/device";

const Top = styled.div`
  gap: 14px;
  margin-bottom: 10px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;

  @media ${devices.desktopS} {
    margin-top: 0;
    margin-bottom: 0;
    gap: 30px;
  }
`;

const FooterSocialMediaLink = styled.a`
  width: 20px;
  height: 20px;
  cursor: pointer;
  @media ${devices.desktopS} {
    width: 50px;
    height: 50px;
  }
`;

const FooterSocialMediaImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  @media ${devices.desktopS} {
    width: 50px;
    height: 50px;
  }
`;

const FooterSocialMedia = () => {
  const socialMedia = ["line", "twitter", "facebook"];

  const arr = socialMedia.map((link, index) => {
    return (
      <React.Fragment key={index}>
        <FooterSocialMediaLink>
          <FooterSocialMediaImage src={`/${link}.png`} alt={`${link}`} />
        </FooterSocialMediaLink>
      </React.Fragment>
    );
  });

  return <Top>{arr}</Top>;
};

export default FooterSocialMedia;
