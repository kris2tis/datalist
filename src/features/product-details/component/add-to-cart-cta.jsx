import React from "react";

export default function AddToCartCTA() {
  return (
    <div
      class="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-[#101622] 
            border-t border-gray-100 dark:border-gray-800 shadow-[0_-8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.2)] 
            max-w-md mx-auto w-full z-40 backdrop-blur-lg bg-white/95 dark:bg-[#101622]/95"
    >
      <div class="flex justify-between items-center gap-3">
        <div class="flex flex-col">
          <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">
            مبلغ نهایی:
          </span>
          <p class="text-xl font-extrabold text-primary dark:text-blue-400">
            ۸,۵۰۰,۰۰۰{" "}
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
              تومان
            </span>
          </p>
        </div>

        <button
          class="flex-1 bg-primary hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl 
                       shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <span class="text-base">افزودن به سبد خرید</span>
          <span class="material-symbols-outlined text-[20px]">
            shopping_cart
          </span>
        </button>
      </div>
    </div>
  );
}
