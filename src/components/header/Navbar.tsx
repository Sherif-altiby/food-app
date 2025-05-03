"use client";

import { Pages, Routes } from "@/constatnts";
import Link from "../link";
import { Menu, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { id: crypto.randomUUID(), title: "Menu", href: Routes.MENU },
    { id: crypto.randomUUID(), title: "About", href: Routes.ABOUT },
    { id: crypto.randomUUID(), title: "Contact", href: Routes.CONTACT },
    {
      id: crypto.randomUUID(),
      title: "Login",
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];

  return (
    <nav>
      <Button
        variant="secondary"
        size="sm"
        className="lg:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <Menu />
      </Button>
      <ul
        className={`fixed lg:static ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 px-10  lg:p-0 bg-background lg:bg-transparent 
        transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto 
        flex items-start lg:items-center gap-10`}
      >
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-10 right-10 lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!w-6 !h-6" />
        </Button>

        {links.map((link) => (
          <li key={link.id}>
            <Link
              className={`text-lg block text-accent transition-all duration-300 hover:text-primary px-3 min-w-[90px] text-center py-2 rounded-3xl ${
                link.title === "Login" &&
                "bg-primary text-white border border-primary hover:bg-white"
              }`}
              href={`/${link.href}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
