import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Register new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout

  const logOut = () => {
    return signOut(auth);
  };
  // Weather user is there or not! checking!
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("User in thea uth state changed", currentuser);
      setUser(currentuser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = { user, createUser, logOut, signIn };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
