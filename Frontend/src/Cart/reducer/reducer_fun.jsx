
const reducerFun = (state,action)=>{
  switch(action.type){
    case "ADD_TO_CART":
      const existProduct = state.cart.find((item)=>item.id==action.payload.id);
      if(existProduct)
      {
        return {
          ...state,
          cart:state.cart.map((item)=>item.id == action.payload.id ? {...item,quantity:item.quantity+action.payload.quantity}:item),
        };
      }
      else{
        return {
          ...state,
          cart:[...state.cart,action.payload]
        }
      }
  
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item)=>item.id != action.payload.id)
      }
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart:state.cart.map((item)=>item.id==action.payload.id ? {...item,quantity:action.payload.quantity}:item),
      };
    default:
      return state;
  }
}

export default reducerFun;