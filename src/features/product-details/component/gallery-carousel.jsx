import React from "react";

export default function GalleryCarousel({ image }) {
  return (
    <div className="w-full bg-surface-light dark:bg-surface-dark pt-4 pb-2">
      <div className="flex justify-center">
        <div className="snap-center shrink-0 w-[85vw] md:w-[60vw]">
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 border">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
