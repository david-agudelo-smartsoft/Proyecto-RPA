import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import React from "react";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/weak-password") {
        setError("Contraseña invalida");
      }
      // setError(error.message);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <h1 className="text-4xl font-semibold">Bienvenido</h1>
              <p className="font-medium text-lg text-gray-500 mt-1">
                Ingresa tus datos para inciar sesión
              </p>
            </div>
            <div>
              <div className="mt-5">
                <label className="text-lg font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  type="email"
                  name="email"
                  placeholder="youremail@example.com"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="mt-1">
                <label className="text-lg font-medium" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="mt-5 flex flex-col">
                <button
                  className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-3 rounded-xl bg-blue-500 text-white text-lg font-bold"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
