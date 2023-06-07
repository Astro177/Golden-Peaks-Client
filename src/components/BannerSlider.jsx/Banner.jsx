import React from "react";

const Banner = () => {
  return (
    <div className="hero h-screen" style={{backgroundImage:"URL(https://img.freepik.com/free-photo/group-girls-camping-forest_1303-9510.jpg?w=996&t=st=1686150486~exp=1686151086~hmac=7051f3277bf32821914724117b7315b140a643865e00887dc4c530da6c1c30f1)"}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-4xl">
      <h1 className="mb-5 text-7xl font-bold uppercase">Make your summer</h1>
      <p className="mb-5 text-3xl font-semibold">Unforgettable!</p>
      <button className="btn-outlined">Enroll Now</button>
    </div>
  </div>
</div>
  );
};

export default Banner;
