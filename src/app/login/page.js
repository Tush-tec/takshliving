"use client";
import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

import Link from "next/link";
import { useAuth } from "@/utility/contextState.js/AuthContext";


const page = () => {
  const [userLogin, setUserLogin] = useState({ username: "", password: "" });
  const { login, error } = useAuth();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await login(userLogin);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-amber-50">
  <div className="w-full max-w-md p-8 flex flex-col gap-6 bg-white shadow-lg rounded-xl border border-amber-200">
    <div className="text-center mb-6">
      <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-amber-100 text-amber-800">
        <LockClosedIcon className="h-6 w-6" />
      </div>
      <h1 className="text-3xl font-serif font-bold text-amber-900">Welcome Back</h1>
      <p className="text-sm text-amber-700 mt-2">Sign in to your furniture account</p>
    </div>

    <form onSubmit={handleOnSubmit} className="flex flex-col gap-5 w-full">
      <div className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-amber-800 mb-1">Username</label>
          <input
            id="username"
            placeholder="Enter your username"
            name="username"
            value={userLogin.username}
            autoComplete="username"
            onChange={handleOnChange}
            className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition placeholder-amber-400"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-amber-800 mb-1">Password</label>
          <input
            id="password"
            placeholder="Enter your password"
            name="password"
            type="password"
            value={userLogin.password}
            autoComplete="current-password"
            onChange={handleOnChange}
            className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition placeholder-amber-400"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-amber-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-amber-700">
              Remember me
            </label>
          </div>
          <a href="/forgot-password" className="text-sm text-amber-600 hover:underline">
            Forgot password?
          </a>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-700 bg-red-50 rounded-lg">
            {error}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={!userLogin.username || !userLogin.password}
        className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-lg transition transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        Sign In
      </button>
    </form>

    <div className="text-center text-sm text-amber-700">
      Don't have an account?{" "}
      <Link href="/register" className="text-amber-800 font-medium hover:underline">
        Create one
      </Link>
    </div>

    <div className="relative mt-4">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-amber-200"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-white text-amber-600">Or continue with</span>
      </div>
    </div>

    {/* <div className="flex gap-4 justify-center mt-4">
      <button className="p-2 rounded-full border border-amber-200 hover:bg-amber-50 transition">
        <GoogleIcon className="h-5 w-5 text-amber-600" />
      </button>
      <button className="p-2 rounded-full border border-amber-200 hover:bg-amber-50 transition">
        <FacebookIcon className="h-5 w-5 text-amber-600" />
      </button>
    </div> */}
  </div>
</div>
  );
};

export default page;