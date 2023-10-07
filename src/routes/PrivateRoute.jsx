import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;

  /* Private route hocche kono ekta shorto diye dekhano kichu so amader khetre jodi user thake tahole kichu dekhabe r jodi na thake seta dekhabe na, ekhon user ase naki nai setar kheyal rakhtese kintu unsubscribe function amra jeta create korechi auth component e jehetu user er moddhe value set kore ditesi! evabe use korte hobe!*/

  /* Ager commit message er sathe notun commit message soho total code tai hocche ekhane push kora hoise so ekta push e 2ta commit message er soman */
};

export default PrivateRoute;
