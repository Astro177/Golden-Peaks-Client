/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import registration from "../../assets/animations/register.json";
import Lottie from "react-lottie";
import { AuthContext } from "../../provider/Authprovider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { saveUser } from "../../api/auth";
import { TbBrandGoogle } from "react-icons/tb";

const Register = () => {
  const { registerUser, updateUserDetails, handleGoogleSignIn } =
    useContext(AuthContext);
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
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password != /(?=.*?[#?!@$%^&*-])/) {
      setError("Password Should have at least one special character");
    }
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
          const saveUser = {
            name: data.name,
            email: data.email,
            photo: data.photo,
          };
          console.log(saveUser);
          fetch(`${import.meta.env.VITE_API_URL}/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Successfully registered");
                navigate("/");
                setError("");
              }
            });
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
        <p>Register using social networks</p>
        <div className="flex justify-center mt-4 mb-2">
          <button
            className="text-4xl text-black p-2 bg-teal-400 rounded-xl hover:scale-110 duration-150"
            onClick={handleGoogleSignIn}
          >
            <TbBrandGoogle />
          </button>
        </div>
        <div className="divider">Or</div>
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
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
                CapLetter: /(?=.*[A-Z])/,
              })}
              className="input input-bordered border-teal-400  w-full max-w-xs mb-6"
            />
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
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

          {errors.password?.type === "minLength" && (
            <p className="text-red-600">Password must be 6 characters</p>
          )}

          {errors.password?.type === "CapLetter" && (
            <p className="text-red-600">Password must have one Uppercase</p>
          )}
          <button
            className="btn rounded-3xl mt-5"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? "Show Password" : "Hide password"}
          </button>
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
