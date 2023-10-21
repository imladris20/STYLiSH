import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { devices } from "../../assets/device";
import FaceBookIcon from "../../assets/image/facebook.png";
import { handleFBLogin } from "../../assets/util";
import UserContext from "../../context/UserContext";

const Headline = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: lightblue;
  margin: 0 0 20px 0;
  padding: 0;
  @media ${devices.desktopS} {
    font-size: 40px;
  }
`;

const ProfileContainer = styled.div`
  width: auto;
  height: 1095px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  @media ${devices.desktopS} {
    height: 1148px;
  }
`;

const FacebookLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 48px;
  margin: 0 auto 25px auto;
  background-color: #3b5998;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const LogoutButton = styled(FacebookLoginButton)`
  background-color: #cccccc;
`;

const FBImg = styled.img`
  width: 40px;
  padding-top: 2px;
`;

const FBLoginText = styled.div`
  color: white;
  width: 245px;
  font-size: 20px;
`;

const LogoutText = styled(FBLoginText)`
  color: #3f3a3a;
`;

const WelcomeMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = () => {
  const { authResponse, accessToken, actions } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const getUserData = async (accessToken) => {
    try {
      const data = await axios.post(
        "https://api.appworks-school.tw/api/1.0/user/signin",
        {
          provider: "facebook",
          access_token: accessToken,
        }
      );
      setUserData(data.data.data.user);
    } catch (error) {
      console.error(
        "Your token is invalid and not accepted by the API. ",
        new Error(error.response.data.error)
      );
    }
  };

  function handleLogout() {
    actions.setAccessToken(null);
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  }

  useEffect(() => {
    if (accessToken) {
      getUserData(accessToken);
      setIsLoggedIn(true);
    }
  }, [accessToken]);

  useEffect(() => {
    if (authResponse.status === "connected") {
      setIsLoggedIn(true);
      actions.setAccessToken(authResponse.authResponse.accessToken);
      localStorage.setItem(
        "accessToken",
        authResponse.authResponse.accessToken
      );
    }
  }, [authResponse]);

  return (
    <ProfileContainer>
      <Headline>您的登入狀態：{isLoggedIn ? "已登入" : "未登入"}</Headline>
      {isLoggedIn ? (
        <>
          <LogoutButton onClick={() => handleLogout()}>
            <LogoutText>登出</LogoutText>
          </LogoutButton>
          <WelcomeMessageContainer>
            <h1>哈囉~{userData.name}！歡迎回來！</h1>
            <img src={userData.picture}></img>
            <h2>您的email是： {userData.email}</h2>
          </WelcomeMessageContainer>
        </>
      ) : (
        <FacebookLoginButton onClick={() => handleFBLogin(actions.setResponse)}>
          <FBImg src={FaceBookIcon}></FBImg>
          <FBLoginText>使用Facebook 快速登入</FBLoginText>
        </FacebookLoginButton>
      )}
    </ProfileContainer>
  );
};

export default Profile;
