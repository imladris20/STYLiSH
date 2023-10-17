import { createContext, useState, useEffect } from "react";

const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [cartCount, setCartCount] = useState(
    localStorage.getItem("cartCount") || 0
  );

  const [isWide, setIsWide] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    // 監聽視窗大小的變化
    const handleResize = () => {
      setIsWide(window.innerWidth >= 1280);
    };

    // 在組件掛載後加入事件監聽器
    window.addEventListener("resize", handleResize);

    // 在組件卸載時移除事件監聽器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [list, setList] = useState([]);

  return (
    <UserContext.Provider
      value={{
        cartCount,
        list,
        isWide,
        actions: {
          setCartCount,
          setList,
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
