import { createContext, useContext, useReducer, useState ,React} from "react";
import reducerFun from "../reducer/reducer_fun";


const CartContext = createContext();

//provider
const CartProvider = ({children})=>{

  const initialState = {
    cart: []
  }
  //reducer
  const [{cart},cartDispatch] = useReducer(reducerFun,initialState);

  return (
   <CartContext.Provider value={{cart,cartDispatch}}>
      {children}
   </CartContext.Provider>
  )
}

const useCart = ()=>useContext(cartContext);

export {useCart,CartProvider};
