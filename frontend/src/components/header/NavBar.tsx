"use client";

import { useState } from "react";
import Link from "@/components/link";
import { Routes } from "@/constants/enums";
import { Menu, X } from "lucide-react"; // For icons

const links = [
  { id: 1, title: "Shop", href: Routes.SHOP },
  { id: 2, title: "About", href: Routes.ABOUT },
  { id: 3, title: "Contact", href: Routes.CONTACT },
  { id: 4, title: "Cart", href: Routes.CART },
];

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <nav className="relative flex justify-between items-center">
      {/* Desktop Navigation */}
      <ul
        className={`fixed lg:static ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10`}
      >
        {/* Close Button (Only for Mobile) */}
        {openMenu && (
          <button
            className="absolute top-5 right-5 text-green-500 p-2"
            onClick={() => setOpenMenu(false)}
          >
            <X size={28} />
          </button>
        )}

        {links.map((link) => (
          <li
            key={link.id}
            className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer"
          >
            <Link href={`/${link.href}`}>{link.title}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="lg:hidden p-2 text-green-500" onClick={toggleMenu}>
        <Menu size={28} />
      </button>

      {/* Overlay when menu is open */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setOpenMenu(false)}
        />
      )}
    </nav>
  );
}
