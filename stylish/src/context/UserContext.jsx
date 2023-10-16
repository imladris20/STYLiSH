import { createContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [cartCount, setCartCount] = useState(
    localStorage.getItem("cartCount") || 0
  );

  return (
    <UserContext.Provider
      value={{
        cartCount: cartCount,
        actions: {
          setCartCount,
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
