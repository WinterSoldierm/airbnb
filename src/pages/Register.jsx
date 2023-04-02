import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/register", {
        name,
        email,
        password,
      }); // axios default baseUrl save in app.jsx
      alert("Registrations Successful");
    } catch (e) {
      alert("Registeration Failed Try Again Later");
    }
  };
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-28">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={register}>
          <input
            type="text"
            placeholder="  John Wick"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="  your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder=" password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="primary">Sign Up</button>
          <div className="text-center py-2 text-gray-500">
            Already have an account?{" "}
            <Link to={"/Login"} className="underline text-black">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
