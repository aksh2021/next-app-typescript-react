import React, { useState } from "react";
import { AuthContext } from "../contexts/auth";
import { useRouter } from "next/router";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const router = useRouter();
  return (
    <AuthContext.Consumer>
      {({ setUser }) => (
        <div style={{padding: '20px'}} >
          <input
            type="text"
            onChange={(el) => {
              setUserName(el.target.value);
            }}
          />
          <button
            onClick={() => {
              setUser(userName);
              router.push("/");
            }}
          >
            Login
          </button>
        </div>
      )}
    </AuthContext.Consumer>
  );
};

export default Login;

