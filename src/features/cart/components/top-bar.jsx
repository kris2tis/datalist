import Image from "next/image";

export const TopBar = ({ itemCount }) => {
  return (
    <header
      class="flex items-center justify-between px-4 py-3 
               bg-white/90 dark:bg-[#101622]/90 backdrop-blur-md 
               border-b border-gray-100 dark:border-gray-800 transition-colors duration-300"
    >
      <div class="flex items-center gap-3">
        <button
          aria-label="بازگشت"
          class="group flex items-center justify-center p-2 rounded-full 
                                           hover:bg-gray-100 dark:hover:bg-gray-800 transition-all 
                                           text-[#111318] dark:text-white"
        >
          <span class="material-symbols-outlined group-hover:-translate-x-0.5 transition-transform">
            <div className="relative h-5 aspect-square">
              <Image src={"/icons/long-arrow.svg"} alt="logn arrow icon" fill className="rotate-90" />
            </div>
          </span>
        </button>

        <h1 class="text-lg font-bold leading-tight tracking-tight text-[#111318] dark:text-white">
          سبد خرید
        </h1>

        <span class="bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 text-xs font-bold px-2 py-1 rounded-full">
          {itemCount}
        </span>
      </div>

      <button class="text-xs font-medium text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors">
        حذف همه
      </button>
    </header>
  );
};
