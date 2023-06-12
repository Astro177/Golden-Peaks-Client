import React from "react";
import Lottie from "react-lottie";
import { Link, useRouteError } from "react-router-dom";
import animation from "../../assets/animations/error.json";
const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { error, status } = useRouteError();
  return (
    <div>
      <section className="flex items-center h-screen p-16 bg-teal-100 text-gray-900">
        <div className="my-container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <Lottie options={defaultOptions} height={600} width={800} />
          <div></div>
          <div className="max-w-md text-center">
            <p className="text-2xl font-semibold md:text-3xl mb-8 mt-10">
              {error?.message}
            </p>
            <Link
              to="/"
              className="btn-outlined"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
