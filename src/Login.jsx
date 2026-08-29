import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      username,
      password,
    };

    console.log(loginData);
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col text-white items-center justify-center">
      {isLoggedIn ? (
        <div className="bg-gray-600 flex flex-col text-center justify-start w-100 h-100 rounded-md">
            <div className=" flex text-start justify-center">
                <h1 className="mt-4 font-bold text-3xl border-2 p-2 rounded-md ">User Detail</h1>
            </div>
            <span className="mt-30  ">
                <p>Name: {username}</p>
                <p>Password: {password}</p>
            </span>

        </div>
      ) : (
        <div className="bg-gray-800 flex flex-col border-2 rounded-lg border-gray-500 pt-5 items-center w-100 h-100">
          <h1 className="font-bold text-violet-500 text-2xl/9 p-4">Login</h1>

          <form className=" flex flex-col w-90" onSubmit={handleSubmit}>
            <label className="text-bold mb-2 text-lg">Username</label>
            <input
              className="bg-gray-600 rounded-md p-1 mb-4 border border-indigo-500 outline-indigo-500"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label className="text-lg mb-2">Password</label>
            <input
              className="bg-gray-600 rounded-md p-1 outline-indigo-500"
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="mt-10 text-bold bg-indigo-500 rounded-md p-1 hover:bg-indigo-400"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
