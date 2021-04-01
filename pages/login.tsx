import React, { useState } from "react";
import { AuthContext } from "../contexts/auth";
import { useRouter } from "next/router";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const router = useRouter();
  return (
    <AuthContext.Consumer>
      {({ setUser }) => (
        <div style={{margin: 'auto', width: 'auto', padding: '10px'}} >
          <h1 style={{textAlign: 'center'}}>Welcome to Login Page</h1>
          <input
            type="text"
            onChange={(el) => {
              setUserName(el.target.value);
            }}
            style={{ width: '30%', padding: '10px', margin: '10px'}}
          />
          <button
            onClick={() => {
              setUser(userName);
              router.push("/");
            }}
            style={{ width: '10%', padding: '10px', fontSize: '15px'}}
          >
            Login
          </button>
        </div>
      )}
    </AuthContext.Consumer>
  );
};

export default Login;

