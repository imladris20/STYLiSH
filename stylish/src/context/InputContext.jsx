import { createContext, useEffect, useState } from "react";

const InputContext = createContext(null);

export const InputProvider = (props) => {
  const [name, setName] = useState("");
  const [isNameBlank, setIsNameBlank] = useState(false);
  const [isNameInvalid, setIsNameInvalid] = useState(false);

  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    if (/^[\p{L}\s]*$/u.test(inputValue)) {
      setName(inputValue);
      if (inputValue === "") {
        setIsNameBlank(true);
        setIsNameInvalid(false);
      } else {
        setIsNameBlank(false);
      }
    }
  };

  const handleNameInvalid = (event) => {
    const inputValue = event.target.value;
    if (isNameBlank) {
      setIsNameInvalid(false);
      return;
    }
    if (inputValue.length === 1) {
      setIsNameInvalid(true);
    } else {
      setIsNameInvalid(false);
    }
    if (inputValue.length === 0) {
      setIsNameBlank(true);
    }
  };

  const [phone, setPhone] = useState("");
  const [isPhoneBlank, setIsPhoneBlank] = useState(false);
  const [isPhoneInvalid, setIsPhoneInvalid] = useState(false);

  const handlePhoneChange = (event) => {
    const inputValue = event.target.value;
    if (/^[0-9]{0,10}$/.test(inputValue)) {
      setPhone(inputValue);
      if (inputValue === "") {
        setIsPhoneBlank(true);
        setIsPhoneInvalid(false);
      } else {
        setIsPhoneBlank(false);
      }
    }
  };

  const handlePhoneInvalid = (event) => {
    const inputValue = event.target.value;
    if (isPhoneBlank) {
      setIsPhoneInvalid(false);
      return;
    } else if (inputValue.length === 0) {
      setIsPhoneBlank(true);
    } else if (inputValue.length < 10) {
      setIsPhoneInvalid(true);
    }
  };

  const [address, setAddress] = useState("");
  const [isAddressBlank, setIsAddressBlank] = useState(false);
  const [isAddressInvalid, setIsAddressInvalid] = useState(false);

  const handleAddressChange = (event) => {
    const inputValue = event.target.value;
    if (/^[\p{L}\d\s-]*$/u.test(inputValue)) {
      setAddress(inputValue);
      if (inputValue === "") {
        setIsAddressBlank(true);
        setIsAddressInvalid(false);
      } else {
        setIsAddressBlank(false);
      }
    }
  };

  const handleAddressInvalid = (event) => {
    const inputValue = event.target.value;
    if (isAddressBlank) {
      setIsAddressInvalid(false);
      return;
    } else if (inputValue.length === 0) {
      setIsAddressBlank(true);
    } else if (inputValue.length < 11) {
      setIsAddressInvalid(true);
    }
  };

  const [email, setEmail] = useState("");
  const [isEmailBlank, setIsEmailBlank] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;

    setEmail(inputValue);
    if (inputValue === "") {
      setIsEmailBlank(true);
      setIsEmailInvalid(false);
    } else {
      setIsEmailBlank(false);
    }
  };

  const handleEmailInvalid = (event) => {
    const inputValue = event.target.value;
    if (isEmailBlank) {
      setIsEmailInvalid(false);
      return;
    } else if (inputValue.length === 0) {
      setIsEmailBlank(true);
    } else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(inputValue)) {
      setIsEmailInvalid(false);
    } else {
      setIsEmailInvalid(true);
    }
  };

  const [deliveryRadio, setDeliveryRadio] = useState([false, false, false]);
  const [isTimeBlank, setIsTimeBlank] = useState(false);

  const handleTimeChange = (index) => {
    const arr = [false, false, false];
    arr[index] = true;
    setDeliveryRadio(arr);
    setIsTimeBlank(false);
  };

  const handleTimeInvalid = () => {
    const remind = deliveryRadio.every((element) => element === false);
    if (remind) {
      setIsTimeBlank(true);
    } else {
      setIsTimeBlank(false);
    }
  };

  const [cardNumber, setCardNumber] = useState("");
  const [isCardNumberBlank, setIsCardNumberBlank] = useState(false);
  const [isCardNumberInvalid, setIsCardNumberInvalid] = useState(false);

  const handleCardNumberChange = (event) => {
    const inputValue = event.target.value;
    if (/^[0-9]{0,16}$/.test(inputValue)) {
      setCardNumber(inputValue);
      if (inputValue === "") {
        setIsCardNumberBlank(true);
        setIsCardNumberInvalid(false);
      } else {
        setIsCardNumberBlank(false);
      }
    }
  };

  const handleCardNumberInvalid = (event) => {
    const inputValue = event.target.value;
    if (isCardNumberBlank) {
      setIsCardNumberInvalid(false);
      return;
    } else if (inputValue.length === 0) {
      setIsCardNumberBlank(true);
    } else if (inputValue.length < 10) {
      setIsCardNumberInvalid(true);
    }
  };

  const [isOrderInfoComplete, setIsOrderInfoComplete] = useState(false);

  useEffect(() => {
    if (
      !isNameInvalid &&
      !isPhoneInvalid &&
      !isAddressInvalid &&
      !isEmailInvalid &&
      deliveryRadio.includes(true)
    ) {
      setIsOrderInfoComplete(true);
      console.log("could submit");
    } else {
      setIsOrderInfoComplete(false);
      console.log("couldn't submit");
    }
  }, [
    isNameInvalid,
    isPhoneInvalid,
    isAddressInvalid,
    isEmailInvalid,
    deliveryRadio,
  ]);

  return (
    <InputContext.Provider
      value={{
        name,
        isNameBlank,
        isNameInvalid,
        phone,
        isPhoneBlank,
        isPhoneInvalid,
        address,
        isAddressBlank,
        isAddressInvalid,
        email,
        isEmailBlank,
        isEmailInvalid,
        deliveryRadio,
        isTimeBlank,
        cardNumber,
        isCardNumberBlank,
        isCardNumberInvalid,
        isOrderInfoComplete,
        actions: {
          handleNameChange,
          handleNameInvalid,
          handlePhoneChange,
          handlePhoneInvalid,
          handleAddressChange,
          handleAddressInvalid,
          handleEmailChange,
          handleEmailInvalid,
          handleTimeChange,
          handleTimeInvalid,
          handleCardNumberChange,
          handleCardNumberInvalid,
        },
      }}
    >
      {props.children}
    </InputContext.Provider>
  );
};

export default InputContext;
