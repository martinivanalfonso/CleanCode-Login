import React, { useReducer } from "react";
import login from "../utils";
import { loginReducer, initialState } from "./login.reducer";

export default function Login() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, error, isLoading, isLoggedIn } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "login" });
    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "failure" });
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p> Hello {username}, you have succesfully logged in</p>
          <button onClick={dispatch({ type: "logout" })}>Log out</button>
        </div>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Welcome! please log in</h2>
          {error && <p>{error}</p>}
          <input
            type="text"
            placeholder="username"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "username",
                fieldValue: e.currentTarget.value,
              })
            }
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "password",
                fieldValue: e.currentTarget.value,
              })
            }
          />
          <button type="submit" disable={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </button>
          <p>Test: user123 / password123</p>
        </form>
      )}
    </div>
  );
}