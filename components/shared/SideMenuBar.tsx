import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";

const SideMenuBar = () => {
  return (
    <div className="md:block hidden min-w-80   min-h-screen border-r p-5">
      <div className="flex flex-row items-center gap-2">
        <Image
          alt="log-img"
          width={44}
          height={44}
          src={"/task-management.png"}
        />
        <h3>
          Task <br />
          Management
        </h3>
      </div>
      <Separator className="my-5" />
      <ul className="menu rounded-box">
        <li>
          <a>Item 1</a>
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
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenuBar;
