import React, { useState } from "react";
import { auth } from "../../Firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// styled Component

import { LoginForm, LoginErr } from "./Login.styled";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const loginDataChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const loginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredentials) => {
        console.log(userCredentials);
        navigate("/task");
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });

    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <LoginErr>
        {error ? "Account Not Available! Please Create An Account :)" : ""}
      </LoginErr>
      <LoginForm onSubmit={loginSubmitHandler}>
        <input
          type="email"
          placeholder="Enter Your Email"
          required
          onChange={loginDataChangeHandler}
          name="email"
          value={loginData.email}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          required
          onChange={loginDataChangeHandler}
          name="password"
          value={loginData.password}
        />

        <button>Login</button>
      </LoginForm>
    </div>
  );
};

export default Login;
