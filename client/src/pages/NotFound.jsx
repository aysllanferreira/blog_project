import React from 'react';
import bg from '../images/night_photto.jpg';

function NotFound() {
  return (

    <div className="relative h-screen overflow-hidden bg-indigo-900">
      <img src={bg} className="absolute object-cover w-full h-full" alt="universe" />
      <div className="absolute inset-0 bg-black opacity-25" />
      <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div className="relative z-10 flex flex-col items-center w-full font-mono">
          <h1 className="mt-4 text-5xl font-extrabold leading-tight text-center text-white">
            You&#x27;re alone here
          </h1>
          <p className="font-extrabold text-white text-8xl my-44 animate-bounce">
            404
          </p>
        </div>
      </div>
    </div>

  );
}

export default NotFound;
