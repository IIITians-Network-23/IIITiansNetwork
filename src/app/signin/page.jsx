"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/profile");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/profile");
    } else {
      setError("");
    }
  };

  return (
    <main className="w-full flex justify-center h-screen items-center">
      <div className="w-5/6 md:w-1/4 mx-auto bg-[#899277] border-black border-2 rounded-3xl p-6">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>

        <h1 className="text-[#333333] text-2xl mb-4 text-center font-bold">
          Login
        </h1>

          <input
            type="email"
            placeholder="Email Address"
            className="input-field border-[#2E362B] border-2 rounded-lg bg-[#899277] placeholder-[#333333] h-10 pl-4 shadow-md"
          />

          <input
            type="password"
            placeholder="Password"
            className="input-field border-[#2E362B] border-2 rounded-lg bg-[#899277] placeholder-[#333333] h-10 pl-4 shadow-md"
          />

          <button className="bg-[#D5D0B2] text-[#2E362B] py-2 px-3 rounded-md">
            Sign In
          </button>

          <p className="text-red-500 text-[16px] mb-4">{error && error}</p>

          <p className="text-[#2E362B]">Don't have an account? <Link href={"/signup"} className="text-[#2E362B] underline">
            Signup here
          </Link></p>
        </form>
      </div>
    </main>
  );
}
