"use client";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  Contact2Icon,
  LibraryBigIcon,
  LayoutGrid,
  House,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { ModeToggle } from "./shared/ModeToggle";

const SideMenuItems = () => {
  const path = usePathname();
  const menuItems: menuItems = [
    {
      name: "Home",
      path: "/home",
      icon: <LayoutGrid />,
    },
    {
      name: "About",
      path: "/about",
      icon: <LibraryBigIcon />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <Contact2Icon />,
    },
    {
      name: "Landing",
      path: "/landing",
      icon: <House />,
    },
  ];
  return (
    <ul className="menu rounded-box">
      {menuItems.map((menu) => (
        <li className="">
          <a
            href={menu.path}
            className={cn(
              menu.path === path && "bg-primary text-primary-foreground",
              "my-2 hover:text-primary "
            )}
          >
            {menu.icon}
            {menu.name}
          </a>
        </li>
      ))}

      {/* <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li>
                <details open>
                  <summary>Parent</summary>
                  <ul>
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li> */}
    </ul>
  );
};

export default SideMenuItems;
