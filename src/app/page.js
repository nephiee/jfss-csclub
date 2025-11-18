"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import toast, {Toaster} from "react-hot-toast";

export default function Home() {
  const [studentNumber, setStudentNumber] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting attendence:", { studentNumber, code });

    const res = await fetch("/api/attendance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentNumber, code }),
    });
    const data = await res.json();
    if (data.success) {
      toast.success(data.message);
      setStudentNumber("");
      setCode("");
    } else {
      toast.error(data.message || "An error occurred");
    }

  }

  return (
    <div className="min-h-screen w-full bg-black scroll-smooth relative">
        <div className="absolute inset-0 min-h-screen h-250 w-full bg-[url('/school.png')] bg-center bg-cover scroll-smooth"></div>
        <div className="absolute inset-0 bg-gray-900/75 mix-blend-multiply"></div>
        <div className="relative w-full min-h-screen z-999 ">
          <Toaster/>
          <Navbar />

          <section id="home" className="flex flex-col mt-35 items-center h-screen text-center text-white px-4">
            <h1 className="text-9xl font-extrabold bg-linear-to-r from-[rgb(50,82,177)] to-[rgb(52,114,175)] bg-clip-text text-transparent">
            Fraser CS <br/> <span className="bg-linear-to-r from-[rgb(255,212,126)] to-[rgb(229,202,103)] bg-clip-text text-transparent">Club</span>
            </h1>
            <p className="mt-4 font-semibold text-2xl max-w-2xl">
            Welcome to the Fraser Computer Science Club! <br/>
            <span className="text-gray-300 text-xl py-2 font-light">
            We are dedicated to fostering a passion for computer science among students of all skill levels. Join us for coding workshops, hackathons, and collaborative projects as we explore the exciting world of technology together.
            </span>
            </p>
          </section>

          <section id="attendence" className="bg-black ">

          <div className="absolute top-200 left-0 w-full h-50 bg-linear-to-b from-transparent to-black"></div>

            <div className="flex flex-col justify-center items-center h-screen text-center text-white px-4">
              <h1 className="font-semibold text-4xl">Attendence Code</h1>
              <p className="mt-4 font-light text-2xl max-w-2xl">
                Please enter the code to mark your attendance for today{"'"}s meeting.
              </p>
              <div className="flex gap-5 items-baseline mt-5">
                <form onSubmit={handleSubmit} className="flex flex-col col-1 gap-5 justify-center items-center">
                  <input
                    type="sn"
                    placeholder="Student Number"
                    className="px-3 py-2.5 rounded-md text-gray-400 text-center text-xl bg-gray-800 outline-none transition duration-300 focus:ring-2 focus:ring-[rgb(52,114,175)]"
                    value={studentNumber}
                    onChange={(e) => setStudentNumber(e.target.value)}
                    pattern="\d{6,}"
                    required
                  />
                  <input
                    type="code"
                    placeholder="Code"
                    className="px-3 py-2.5 rounded-md text-gray-400 text-center text-xl bg-gray-800 outline-none transition duration-300 focus:ring-2 focus:ring-[rgb(52,114,175)]"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                  />
                  <button type="submit" className="px-3 py-2.5 h-min w-30 bg-[rgb(52,114,175)] hover:bg-[rgb(93,152,211)] transition duration-300 ease-in-out rounded-md text-white text-xl">
                    Submit
                  </button>
                </form>

                
              </div>
            </div>
          </section>
        </div>
    </div>
  );
}
