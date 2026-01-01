"use client";

import { useState } from "react";
import { ArrowIcon } from "../../../shared/assets/icons/icons";

export default function DropDown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div  className="p-5">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between cursor-pointer"
      >
        <h4  className="font-bold text-sm ">{title}</h4>
        <div
          className={`${
            isOpen ? "rotate-270" : "rotate-90"
          } transition-all duration-300`}
        >
          <ArrowIcon className="bg-black" />
        </div>
      </div>

      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
}
