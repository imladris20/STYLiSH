import { createContext, useState } from "react";

const InputContext = createContext(null);

export const InputProvider = (props) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    if (/^\p{L}+$/u.test(inputValue)) {
      setName(inputValue);
    }
  };

  return (
    <InputContext.Provider
      value={{
        name,
        actions: {
          setName,
          handleNameChange,
        },
      }}
    >
      {props.children}
    </InputContext.Provider>
  );
};

export default InputContext;
