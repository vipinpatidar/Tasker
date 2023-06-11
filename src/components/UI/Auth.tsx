import { useState } from "react";
// components
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Section from "./Section";

// styled components

import { AuthBtnSection } from "./Auth.styled";

const MainPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const openLogin = () => {
    setIsLogin(true);
  };

  const openSignIn = () => {
    setIsLogin(false);
  };

  return (
    <Section>
      <AuthBtnSection>
        <button
          className={isLogin ? `isLoginClass` : `isNotLoginClass`}
          onClick={openLogin}
        >
          Login
        </button>
        <button
          className={!isLogin ? `isLoginClass` : `isNotLoginClass`}
          onClick={openSignIn}
        >
          Sign Up
        </button>
      </AuthBtnSection>
      {isLogin && <Login />}
      {!isLogin && <SignUp setIsLogin={setIsLogin} />}
    </Section>
  );
};

export default MainPage;
