import "../../index.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div class="bg-white p-8 rounded shadow-md w-80">
        <h2 class="text-2xl mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              value={email}
              id="email"
              name="email"
              class="w-full px-3 py-2 border rounded-md"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div class="mb-4">
            <label
              for="password"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              id="password"
              name="password"
              class="w-full px-3 py-2 border rounded-md"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div class="mb-6">
            <button
              type="submit"
              class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Sign In
            </button>
          </div>
          <div class="text-center">
            <a href="#" class="text-sm text-blue-500 hover:text-blue-700">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
