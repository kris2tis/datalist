"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function ProductsSidebar() {
 

  return (
    <div className="min-w-40 bg-gray-800 p-2 rounded-md flex flex-col gap-y-2">
      {/* Category */}
      <div className="flex flex-col gap-y-2">
        <span>دسته بندی</span>
        {categoryList.map((c) => (
          <span onClick={() => setQuery("category", c.title)} key={c.id}>
            {c.title}
          </span>
        ))}
      </div>
      {/* Sort */}
      <div className="flex flex-col gap-y-2">
        <span>مرتب سازی</span>

        {sortsList.map((c) => (
          <span onClick={() => setQuery("sort", c.englishTitle)} key={c.id}>
            {c.title}
          </span>
        ))}
      </div>
      {/* Price */}
      <div className="flex flex-col gap-y-2">
        <span>مرتب سازی</span>

        <input
          type="text"
          name="gte"
          placeholder="بیشتر از"
          onChange={(e) => {
            const gtePrice = e.target.value;
            setQuery("gte", gtePrice);
          }}
        />
        <input
          type="text"
          name="lte"
          placeholder="کمتر از"
          onChange={(e) => {
            const ltePrice = e.target.value;
            setQuery("lte", ltePrice);
          }}
        />
      </div>
    </div>
  );
}
