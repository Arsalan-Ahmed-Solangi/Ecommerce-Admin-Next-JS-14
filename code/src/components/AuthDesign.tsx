import Link from "next/link";
import React from "react";

function AuthDesign() {
  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-50">
      <div className="flex flex-col items-center justify-center py-12 px-6 sm:px-10 text-gray-800 w-full max-w-lg bg-white shadow-md rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-2xl uppercase font-bold text-center mb-6">
          Welcome Ecommerce Admin
        </h2>
        <div>
          <h3 className="text-lg font-bold text-center mb-2">
            Create Your Account
          </h3>
          <Link
            href={"signup"}
            className="block w-full px-4 py-2 text-center text-white bg-custom rounded-lg"
          >
            Sign Up
          </Link>
          <div className="my-4 text-center">
            <span className="px-3 text-sm text-gray-500">OR</span>
          </div>
          <Link
            href={"login"}
            className="block w-full px-4 py-2 text-center text-white bg-custom rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthDesign;
