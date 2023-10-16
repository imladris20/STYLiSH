import styled from "styled-components";
import { devices } from "../assets/device";

const LoadingGif = styled.div`
  display: block;
  margin: 490px auto;
  width: 64px;
  height: 64px;
  background: url("/loading.gif") center/cover no-repeat;

  @media ${devices.desktopS} {
    margin: 747px auto;
    width: 128px;
    height: 128px;
  }
`;

const Loading = () => {
  return <LoadingGif />;
};

export default Loading;
