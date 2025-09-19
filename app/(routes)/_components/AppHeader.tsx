import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

const MenuOption = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Upgrade",
    href: "/upgrade",
  },
  {
    name: "How it works?",
    href: "/how-it-works",
  },
];

function AppHeader() {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <Image src={"/logo.svg"} alt="Logo" width={40} height={40} />
        {/* <h1 className="text-base font-bold md:text-2xl">AI Mock Interview</h1> */}
      </div>
      <ul className="flex gap-5">
        {MenuOption.map((option, index) => (
          <li className="text-lg hover:scale-105 transition-all cursor-pointer">
            {option.name}
          </li>
        ))}
      </ul>
      <div>
        <UserButton />
      </div>
    </nav>
  );
}

export default AppHeader;
