import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Registers = () => {
  const { createUser, setUser, userUpdate } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, email, password });
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        userUpdate({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6 px-5">
        <h2 className="font-bold text-center text-2xl">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              className="input"
              placeholder="Photo URL"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <h2>
              <h2 className="font-semibold text-center pt-3">
                Have An Account ?
                <Link to="/auth/login" className="text-secondary">
                  Login
                </Link>
              </h2>
            </h2>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Registers;
