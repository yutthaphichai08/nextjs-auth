"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h3>LoginPage</h3>
        <hr className="my-3" />
        <form action="">
          <input
            className="block bg-gray-300 p-2 my-2 rounded-md"
            type="email"
            placeholder="Enter your email"
          />
          <input
            className="block bg-gray-300 p-2 my-2 rounded-md"
            type="password"
            placeholder="Enter your password"
          />
          <button type="submit" className="bg-green-500 p-2 rounded-md text-white">Sign In</button>
        </form>
        <hr className="my-3"/>
        <p>Already have an account? go to <Link className="text-blue-500 hover:underline" href='/register'>Register</Link> Page</p>
      </div>
    </div>
  );
}

export default LoginPage;
