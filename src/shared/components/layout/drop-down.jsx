"use client";

import { useDropdown } from "../../stores/dropdown-store";

export default function DropDown() {
  const { isActive, data } = useDropdown();

  return (
    isActive && (
      <>
        <div className="fixed bottom-40 left-1/2 -translate-x-1/2 border  w-4/5  bg-background-dark z-30 rounded-md p-2">
          {data}
        </div>
        {/* <div className="absolute w-full min-h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-background-dark/80 backdrop-blur-[1px] z-20">sd</div> */}
      </>
    )
  );
}
