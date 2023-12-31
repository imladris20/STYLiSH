import { createContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = (props) => {
  function createInitializeList() {
    if (localStorage.getItem("list")) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  }

  const [cartCount, setCartCount] = useState(
    localStorage.getItem("cartCount") || 0
  );
  const [isWide, setIsWide] = useState(window.innerWidth >= 1280);
  const [totalPrice, setTotalPrice] = useState(0);
  const [list, setList] = useState(createInitializeList);

  const [authResponse, setResponse] = useState({});
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth >= 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        cartCount,
        list,
        isWide,
        totalPrice,
        authResponse,
        accessToken,
        actions: {
          setCartCount,
          setList,
          setTotalPrice,
          setResponse,
          setAccessToken,
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
