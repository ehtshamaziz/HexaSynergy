"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { menuData } from "@/data";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent lgCustom:bg-white/10 dark:lgCustom:bg-black/30 backdrop-blur-sm ${
        sticky
          ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="px-4 mdCustom:px-0 xl:mr-12">
            <Link href="/" className={`header-logo block w-full text-2xl `}>
              <Image
                src="/images/logo/logo.png"
                width={600}
                height={400}
                alt=""
                className="h-auto w-[13rem] max-w-none mdCustom:w-[11rem]"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between mdCustom:justify-end px-4 mdCustom:px-0 gap-2">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  } bg-black`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0 " : " "
                  } bg-black`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  } bg-black`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={menuItem.id} className="group relative">
                      {menuItem.path && (
                        <Link
                          href={menuItem.path}
                          className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                        >
                          {menuItem.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-20 lg:pr-0">
                <ThemeToggler sticky={sticky} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
