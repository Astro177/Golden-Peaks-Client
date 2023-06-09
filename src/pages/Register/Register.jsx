/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import registration from "../../assets/animations/register.json";
import Lottie from "react-lottie";

import { AuthContext } from "../../provider/Authprovider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Register = () => {
  const { registerUser, updateUserDetails } = useContext(AuthContext);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: registration,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password != data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (data.password.length < 6) {
      setError("Please provide a 6 character password");
      return;
    } else {
      setError("");
    }
    if ((!data.email, !data.password, !data.name, !data.photo)) {
      setError("Please provide valid information");
      return;
    } else {
      registerUser(data.email, data.password)
        .then((result) => {
          updateUserDetails(result.user, data.name, data.photo);
          toast.success("Successfully registered")
          navigate("/");
          setError("");
        })
        .catch((err) => {
         setError(err.message);
        });
    }
  };
  return (
    <div className="md:flex justify-center items-center gap-8">
      <div>
        <Lottie options={defaultOptions} height={600} width={400} />
      </div>
      <div className="text-center">
        <p className="text-4xl text-color mb-8">
          New to our website? Register now!
        </p>
        <form className=" mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              required
              className="input input-bordered border-teal-400  w-full max-w-xs mb-6"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              required
              className="input input-bordered border-teal-400  w-full max-w-xs mb-6"
            />
          </div>
          <div>
            <input
              type="password"
              required
              placeholder="Password"
              {...register("password")}
              className="input input-bordered border-teal-400  w-full max-w-xs mb-6"
            />
          </div>
          <div>
            <input
              type="password"
              required
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="input input-bordered border-teal-400  w-full max-w-xs mb-6"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Photo URL"
              {...register("photo")}
              required
              className="input input-bordered border-teal-400 w-full max-w-xs "
            />
          </div>
          <p className="text-error">{error}</p>
          <p className="mb-2">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-xl hover:underline decoration-1 text-teal-500"
            >
              Sign In
            </Link>
          </p>
          <button type="submit" className="btn-outlined">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
