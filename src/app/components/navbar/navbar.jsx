"use client";

import Logo from "../../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import Avatar from "react-avatar";

const links = [
  { title: "IIITs", href: "/iiit_page" },
  { title: "Alumini", href: "alumni_page" },
  { title: "Events", href: "/" },
  { title: "Blogs", href: "/" },
  { title: "About Us", href: "/" },
];

const navbar = () => {
  return (
    <div className="bg-[#2E362B] flex flex-row justify-between items-center px-[100px] py-[15px]">
      <div>
        <Link href="/">
          <Image src={Logo} alt="Logo" height={176} width={93} />
        </Link>
      </div>

      <div className="flex flex-row gap-10 justify-between  items-center text-lg text-[#D5D0B2] ">
        {links.map((link) => {
          return <Link href={link.href}>{link.title}</Link>;
        })}
        <Avatar googleId="" size="30" round={true} />
        {/* Do take reference from the link https://www.npmjs.com/package/react-avatar */}
      </div>
    </div>
  );
};
export default navbar;
