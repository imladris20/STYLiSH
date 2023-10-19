import { createContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [cartCount, setCartCount] = useState(
    localStorage.getItem("cartCount") || 0
  );

  const [isWide, setIsWide] = useState(window.innerWidth >= 1280);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth >= 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("list")));
  }, []);

  return (
    <UserContext.Provider
      value={{
        cartCount,
        list,
        isWide,
        totalPrice,
        actions: {
          setCartCount,
          setList,
          setTotalPrice,
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
