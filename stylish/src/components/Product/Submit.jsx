import styled from "styled-components";
import { devices } from "../../assets/device";

const SubmitBtn = styled.input`
  background-color: black;
  width: 100%;
  height: 44px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 3.2px;

  @media ${devices.desktopS} {
    font-size: 20px;
    letter-spacing: 4px;
    height: 64px;
    border: 1px #979797 solid;
  }
`;

const Submit = () => {
  return <SubmitBtn type="submit" value="加入購物車" />;
};

export default Submit;
