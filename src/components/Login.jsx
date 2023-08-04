import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
      setIsLoading(false);
      setUsername("");
      setPassword("");
    } catch {
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="h-[50vh] flex flex-col items-center justify-center ">
      <span className="text-black font-bold">{user.name}</span>
      <form className="flex flex-col items-center">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="h-[30px] m-[5px] border border-black px-2 focus:outline-none"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-[30px] m-[5px] border border-black px-2 focus:outline-none"
        />

        <button
          onClick={handleClick}
          className="w-full h-[30px] bg-teal-500 text-white border-none font-bold m-[5px] rounded-[5px] disabled:bg-[#026464] disabled:cursor-not-allowed"
          type="submit"
          disabled={!username || !password}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
        <span
          data-testid="error"
          className={`${error ? "visible text-red-500" : "invisible"}`}
        >
          Something Went wrong!
        </span>
      </form>
    </div>
  );
};

export default Login;
