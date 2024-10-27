import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  };

  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center bg-[#5B5254]">
        <div className="border-2 border-transparent shadow-lg bg-[#1F2937] rounded-xl px-14 py-10">
          <h1 className="text-center font-bold text-3xl text-purple-500 mb-2">
            Login..
          </h1>
          <hr />
          <form onSubmit={submitHandler} className="flex flex-col space-y-6 mt-5 ">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 bg-transparent focus:ring-2 focus:ring-purple-500 focus:border-purple-500 px-5 py-3 rounded-md text-lg placeholder:text-gray-400 transition-all duration-300"
              type="email"
              placeholder="Enter your email"
              value={email}
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 bg-transparent focus:ring-2 focus:ring-purple-500 focus:border-purple-500 px-5 py-3 rounded-md text-lg placeholder:text-gray-400 transition-all duration-300"
              type="password"
              placeholder="Enter your password"
              value={password}
            />
            <input
              className="cursor-pointer rounded-md py-3 text-lg text-white font-semibold hover:bg-purple-600 bg-purple-500 transition-all duration-300"
              type="submit"
              value="Login"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
