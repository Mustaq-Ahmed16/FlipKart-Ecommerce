
import { Navigate } from "react-router-dom";
import { useShopContext } from "../context/shopContext";


const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useShopContext();

  return (
    isLoggedIn ? children : <Navigate to="/login" />
  )


}

export default PrivateRoute;