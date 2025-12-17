"use client";
// import { Slider } from "@radix-ui/themes";
import { useState } from "react";

export default function PriceRange({ onChange }) {
  const [value, setValue] = useState({ min: 0, max: 0 });

  return (
    <div className="flex flex-col gap-y-2 py-2">
      <div className="flex flex-col gap-x-3 text-white">
        <div className="flex items-center  gap-x-10">
          <span>از</span>
          <div className="flex gap-x-2">
            <span>{value.min.toLocaleString()}</span>
            <span className="text-gray-300 text-[12px]">تومان</span>
          </div>
        </div>
        <div className="flex items-center  gap-x-10">
          <span>تا</span>
          <div className="flex gap-x-2">
            <span>{value.max.toLocaleString()}</span>
            <span className="text-gray-300 text-[12px]">تومان</span>
          </div>
        </div>
      </div>
      {/* <Slider
        min={0}
        max={1000000}
        defaultValue={[0, 1000000]}
        onValueChange={(val) => {
          const [min, max] = val;
          setValue({ min: min, max: max });
          onChange([min, max]);
        }}
      /> */}
    </div>
  );
}
