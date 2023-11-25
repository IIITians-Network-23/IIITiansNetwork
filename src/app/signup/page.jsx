"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  // email validity check

  //password check

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
      if (res.status === 200) {
        setError("");
        router.push("/signin");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  return (
    <main className="w-full flex justify-center">
      <div className="pt-16 w-5/6 flex justify-center">
        <form className="pt-4 flex flex-col w-1/4" onSubmit={handleSubmit}>
          <label htmlFor="First Name" className="text-[#D5D0B2]">
            First Name
          </label>
          <input type={"text"} placeholder="first name" />
          <label htmlFor="Last Name" className="text-[#D5D0B2]">
            Last Name
          </label>
          <input type={"text"} placeholder="last name" />

          <label htmlFor="Email" className="text-[#D5D0B2]">
            Email
          </label>
          <input type={"email"} placeholder="email" />

          <label htmlFor="Password" className="text-[#D5D0B2]">
            Password
          </label>
          <input type={"password"} placeholder="password" />

          <button className="py-2 px-3 bg-green-500 my-4">Register</button>

          <p className="text-red-500 text-[16px] mb-4">{error && error}</p>

          <Link href={"/signin"} className="text-[#D5D0B2]">
            Login with an existing account
          </Link>
        </form>
      </div>
    </main>
  );
}
