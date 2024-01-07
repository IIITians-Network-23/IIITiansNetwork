"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";

export default function Home() {
  // State for handling errors
  const [error, setError] = useState("");
  // Router instance
  // const router = useRouter();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fname = e.target[0].value;
    const lname = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;

    try {
      const res = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
        }),
      });

      if (res.status === 400) {
        setError("This Email is already registered");
      }
      // if (res.status === 200) {
      //   setError("");
      //   router.push("/signin");
      // }
    } catch (error) {
      setError("Error, try again");
      console.error(error);
    }
  };

  // JSX structure for the component
  return (
    <main className="w-full flex justify-center h-screen items-center">
      <div className="w-5/6 md:w-1/4 mx-auto bg-[#899277] border-black border-2 rounded-3xl p-6">
        <h1 className="text-[#333333] text-2xl mb-4 text-center font-bold">
          Register
        </h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="input-field border-[#333333] border-2 rounded-lg bg-[#899277] placeholder-[#333333] h-10 pl-4 shadow-md"
          />

          <input
            type="email"
            placeholder="Email"
            className="input-field border-[#333333] border-2 rounded-lg bg-[#899277] placeholder-[#333333] h-10 pl-4 shadow-md"
          />

          <input
            type="password"
            placeholder="Password"
            className="input-field border-[#333333] border-2 rounded-lg bg-[#899277] placeholder-[#333333] h-10 pl-4 shadow-md"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field border-[#333333] border-2 rounded-lg bg-[#899277] placeholder-[#333333] h-10 pl-4 shadow-md"
          />

          <button className="bg-[#D5D0B2] text-[#333333] py-2 px-3 rounded-md">
            Register
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <p className="text-[#333333] text-center text-sm">
            Already have an account?{" "}
            <Link href="/signin">
              <span className="underline font-bold">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
