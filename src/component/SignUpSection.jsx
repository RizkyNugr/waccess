import React from 'react';

const SignUpSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Image */}
      <div className="w-full md:w-1/3">
        <img src="/img/dam.jpg" alt="Dam" className="rounded-lg shadow-lg w-full" />
      </div>
      
      {/* Center Text and Button */}
      <div className="text-center w-full md:w-1/3">
        <p className="text-gray-800 font-semibold mb-4">Belum membuat akun?</p>
        <a
          href="/signin"
          className="inline-block border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
        >
          Sign In Now
        </a>
      </div>
      
      {/* Right Image */}
      <div className="w-full md:w-1/3">
        <img src="/img/disinfektan.jpg" alt="Worker" className="rounded-lg shadow-lg w-full" />
      </div>
    </div>
  );
};

export default SignUpSection;
