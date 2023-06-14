/* eslint-disable no-undef */
import React, { useContext, useRef, useState } from "react";
import { TbBrandGoogle } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import login from "../../assets/animations/login.json";
import { AuthContext } from "../../provider/Authprovider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { handleGoogleSignIn, signIn} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        reset;
        toast.success('Successfully logged in!')
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="md:flex justify-center items-center gap-8">
      <Helmet>
        <title>Golden Peaks | Log-in</title>
      </Helmet>
      <div>
        <Lottie options={defaultOptions} height={600} width={400} />
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-color mb-8">
          Login to your account
        </h1>
        <p>Login using social networks</p>
        <div className="flex justify-center mt-4 mb-2">
          <button
            className="text-4xl text-black p-2 bg-teal-400 rounded-xl hover:scale-110 duration-150"
            onClick={handleGoogleSignIn}
          >
            <TbBrandGoogle />
          </button>
        </div>
        <p>Or</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="display: inline-block mt-2">
            <input
              {...register("email")}
              placeholder="Email"
              required
              className="input input-bordered border-teal-400 w-full max-w-xs mb-6"
            />
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="password"
              required
              className="input input-bordered border-teal-400 w-full max-w-xs relative"
            />
          </div>
          <p className="text-red-800">{error}</p>
         
            <button
              className="btn rounded-3xl mt-5"

              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? "Show Password" : "Hide password"}
            </button>
          
          
          <p className="mb-4">
            <span className="text-2xl text-color">New here?</span> Sign up to
            get access to our vast category of activities
            <Link
              to="/register"
              className="text-xl hover:underline decoration-1 text-teal-500"
            >
              Sign Up
            </Link>
          </p>

          <button type="submit" className="btn-outlined">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
