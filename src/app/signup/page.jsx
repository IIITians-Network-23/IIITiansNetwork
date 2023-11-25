"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";

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
    <main className="w-full pt-16 flex justify-center">
      <div className="pt-16 w-5/6 flex justify-center">
        <form
          className="pt-4 flex flex-col gap-4 w-[37.5%] max-sm:w-full max-lg:w-3/4 rounded-2xl bg-[#899277] p-[30px]"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center">
            <h1 className="text-[#2E362B] font-semibold text-xl">Register</h1>
          </div>

          <input
            type={"text"}
            placeholder="first name"
            className="px-3 py-2  border rounded-lg text-[#2e362b] placeholder:text-[#2e362b] border-[#2e362b] bg-[#899277] focus:outline-none shadow-lg"
          />

          <input
            type={"text"}
            placeholder="last name"
            className="px-3 py-2  border rounded-lg text-[#2e362b] placeholder:text-[#2e362b] border-[#2e362b] bg-[#899277] focus:outline-none shadow-lg "
          />

          <input
            type={"email"}
            placeholder="email"
            className="px-3 py-2  border rounded-lg text-[#2e362b] placeholder:text-[#2e362b] border-[#2e362b] bg-[#899277] focus:outline-none shadow-lg"
          />

          <input
            type={"password"}
            placeholder="password"
            className="px-3 py-2  border rounded-lg text-[#2e362b] placeholder:text-[#2e362b] border-[#2e362b] bg-[#899277] focus:outline-none shadow-lg"
          />

          <button className="py-2 px-3  bg-[#D5D0B2] text-lg rounded-lg text-[#2E362B] my-4">
            Sign In
          </button>

          <button className="flex flex-row gap-3 items-center px-3 text-[#2e362b] text-lg py-2 rounded-lg bg-[#d5d0b2] justify-center  ">
            Sign In With <GoogleIcon sx={{ color: "#2e362" }} />
          </button>

          <p className="text-red-500 text-[16px] mb-1">{error && error}</p>

          <Link
            href={"/signin"}
            className="text-[#2e362b] text-lg text-center font-semibold"
          >
            Login with an existing account
          </Link>
        </form>
      </div>
    </main>
  );
}
