import React, { createContext, useContext, useState } from "react";


const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [user, setUser] = useState(null);
  const [username,setUsername]=useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [totalAmount,setTotalAmount]=useState(0);
  const [orderId,setOrderId]=useState(0);

  return (
    <ShopContext.Provider value={{
      cart, setCart, paymentMethod, setPaymentMethod,
      shippingAddress, setShippingAddress, user, setUser,
      isLoggedIn, setIsLoggedIn, totalAmount, setTotalAmount, orderId, setOrderId, username, setUsername
    }}>
      {children}
    </ShopContext.Provider>
  );
};

const useShopContext = () => useContext(ShopContext);

export { ShopProvider, useShopContext };

