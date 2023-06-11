import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";

//Styled components

import { SignUpForm } from "./SignUp.styled";

interface SignInProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp = ({ setIsLogin }: SignInProps) => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const signUpDataChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignUpData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const signUpSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
      .then((userCredentials) => {
        console.log(userCredentials);
        navigate("/task");
      })
      .catch((err) => {
        console.log(err);
      });
    setSignUpData({
      email: "",
      password: "",
    });
  };

  const moveToSignIn = () => {
    setIsLogin(true);
  };

  return (
    <div>
      <SignUpForm onSubmit={signUpSubmitHandler}>
        <input
          type="email"
          placeholder="Enter Your Email"
          required
          onChange={signUpDataChangeHandler}
          name="email"
          value={signUpData.email}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          required
          onChange={signUpDataChangeHandler}
          name="password"
          value={signUpData.password}
        />
        <p>
          Already have an account?{" "}
          <span className="signInBtn" onClick={moveToSignIn}>
            Sign In
          </span>
        </p>
        <button>Sing Up</button>
      </SignUpForm>
    </div>
  );
};

export default SignUp;
