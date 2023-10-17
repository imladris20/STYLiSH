import { createContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [cartCount, setCartCount] = useState(
    localStorage.getItem("cartCount") || 0
  );

  const [list, setList] = useState([]);

  return (
    <UserContext.Provider
      value={{
        cartCount: cartCount,
        list: list,
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

/* "list": [
      {
        "id": "201807202157",
        "name": "活力花紋長筒牛仔褲",
        "price": 1299,
        "color": {
        	"code": "DDF0FF",
            "name": "淺藍"
        },
        "size": "M",
        "qty": 1
      }
    ] */
