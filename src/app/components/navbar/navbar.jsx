"use client";

import Logo from "../../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";

const links = [
  { title: "IIITs", href: "/iiit_page" },
  { title: "Alumini", href: "alumni_page" },
  { title: "Events", href: "/" },
  { title: "Blogs", href: "/" },
  { title: "About Us", href: "/" },
];

const navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };


  return (
    <header className="fixed bg-[#2E362B] flex justify-center w-full h-16">
      <div className="w-5/6 flex flex-row justify-between items-center">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Logo" height={176} width={93} />
          </Link>
        </div>

        <div className="flex flex-row gap-10 justify-between  items-center text-lg text-[#D5D0B2]">
          {links.map((link) => {
            return (
              <Link href={link.href} key={link.title}>
                {link.title}
              </Link>
            );
          })}
          <div>
            <AccountCircleOutlinedIcon style={{ fontSize: "2rem" }} onClick={handleShowMenu}/>
            {showMenu &&
            <div className="absolute bg-[#2E362B] z-1 text-[#D5D0B2] top-16 w-36 shadow-md" onClick={handleShowMenu}>
              <Link href={"signup"}>
                <div className="py-2 px-2">Register</div>
              </Link>
            </div>}
          </div>
        </div>
      </div>
    </header>
  );
};
export default navbar;
