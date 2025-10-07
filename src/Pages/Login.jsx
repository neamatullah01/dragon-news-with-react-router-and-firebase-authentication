import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = use(AuthContext);
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6 px-5">
        <h2 className="font-bold text-center text-2xl">Login your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-600 text-xs">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <h2>
              <h2 className="font-semibold text-center pt-3">
                Dont’t Have An Account ?
                <Link to="/auth/register" className="text-secondary">
                  Register
                </Link>
              </h2>
            </h2>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
