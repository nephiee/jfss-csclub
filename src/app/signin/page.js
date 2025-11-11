"use client";

import React from "react";
import Navbar from "../Navbar";

const SignIn = () => {
    return (
        <div className="min-h-screen w-full bg-black scroll-smooth">
            <Navbar />
            <a href="/auth/login">Login</a>
            
            <div className="">
                <h1 className="text-2xl font-light flex w-full justify-center items-center text-white mt-20">
                Sorry for the inconvenience! The sign-in page is currently under construction.
                </h1>
                
            </div>
        </div>
    )
}

export default SignIn;