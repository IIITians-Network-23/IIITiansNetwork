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
    <main className="w-full flex justify-center">
      <div className="pt-16 w-5/6 flex justify-center">
        <form className="pt-4 flex flex-col w-1/4" onSubmit={handleSubmit}>
          <label htmlFor="Email" className="text-[#D5D0B2]">
            Email
          </label>
          <input type={"email"} placeholder="email" />

          <label htmlFor="Password" className="text-[#D5D0B2]">
            Password
          </label>
          <input type={"password"} placeholder="password" />

          <button className="py-2 px-3 bg-green-500 my-4" type="submit">
            Sign In
          </button>

          <p className="text-red-500 text-[16px] mb-4">{error && error}</p>

          <Link href={"/signup"} className="text-[#D5D0B2]">
            Signup here
          </Link>
        </form>
      </div>
    </main>
  );
}
