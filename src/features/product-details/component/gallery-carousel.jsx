import { FavoritIcon } from "@/shared/assets/icons/icons";
import Image from "next/image";
import React from "react";

export default function GalleryCarousel({ image }) {
  return (
    <div  className="lg:col-span-4 flex flex-col lg:flex-row gap-4 h-fit lg:sticky top-28">
      <div  className="relative flex-1 bg-white dark:bg-neutral-800 rounded-2xl p-6 lg:p-10 flex items-center justify-center aspect-4/5 h-[400px] lg:aspect-auto overflow-hidden group shadow-soft border border-neutral-100 dark:border-neutral-700/50">
        <div  className="absolute top-4 left-4 flex flex-col gap-3 z-10">
          <button
             className="w-8 h-8 p-1 rounded-full cursor-pointer bg-white text-text-light hover:text-primary hover:bg-primary/5 border border-neutral-100 flex items-center justify-center shadow-sm transition-colors"
            title="افزودن به علاقه‌مندی"
          >
            <FavoritIcon className="fill-black" />
          </button>
        </div>
        <span className="z-40 text-white">پوزش محصول عکس ندارد</span>
        {false && <Image src={imageUrl} fill alt="product picture" />}

        {/* <div  className="absolute bottom-4 right-4 bg-neutral-900/5 backdrop-blur-sm dark:bg-neutral-900/80 px-4 py-1.5 rounded-full text-xs font-bold text-neutral-600 dark:text-neutral-300 border border-white/20">
                  تنوع رنگ: ۴
                </div> */}
      </div>
    </div>
  );
}
