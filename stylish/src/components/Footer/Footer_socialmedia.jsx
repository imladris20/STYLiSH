import styled from "styled-components";
import { devices } from "../../assets/device";

const Top_Footer__socialmedia = styled.div`
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

const Footer__socialmedia_link = styled.a`
  width: 20px;
  height: 20px;
  cursor: pointer;
  @media ${devices.desktopS} {
    width: 50px;
    height: 50px;
  }
`;

const Footer__socialmedia_img = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  @media ${devices.desktopS} {
    width: 50px;
    height: 50px;
  }
`;

const Footer__socialmedia = () => {
  return (
    <Top_Footer__socialmedia>
      <Footer__socialmedia_link>
        <Footer__socialmedia_img src="/images/line.png" alt="line" />
      </Footer__socialmedia_link>
      <Footer__socialmedia_link>
        <Footer__socialmedia_img src="/images/twitter.png" alt="twitter" />
      </Footer__socialmedia_link>
      <Footer__socialmedia_link>
        <Footer__socialmedia_img src="/images/facebook.png" alt="facebook" />
      </Footer__socialmedia_link>
    </Top_Footer__socialmedia>
  );
};

export default Footer__socialmedia;

/*
<div class="footer__socialmedia row-flex flex-space-between">
  <a class="footer__socialmedia-link" href="#">
    <img class="footer__socialmedia-img" src="./images/line.png" alt="line" />
  </a>
  <a class="footer__socialmedia-link" href="#">
    <img
      class="footer__socialmedia-img"
      src="./images/twitter.png"
      alt="twitter"
    />
  </a>
  <a class="footer__socialmedia-link" href="#">
    <img
      class="footer__socialmedia-img"
      src="./images/facebook.png"
      alt="facebook"
    />
  </a>
</div>;
*/
