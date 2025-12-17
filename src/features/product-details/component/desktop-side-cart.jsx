import React from "react";

export default function DesktopSideCart() {
  return (
    <div class="hidden lg:block bg-white dark:bg-[#151c2b] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg space-y-6">
      <h4 class="text-xl font-bold text-[#111318] dark:text-white">
        خلاصه خرید
      </h4>

      <div class="flex justify-between items-center pb-4 border-b border-dashed border-gray-200 dark:border-gray-700">
        <p class="text-gray-500 dark:text-gray-400 font-medium">مبلغ نهایی:</p>
        <p class="text-2xl font-extrabold text-primary dark:text-blue-400">
          ۸,۵۰۰,۰۰۰
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
            تومان
          </span>
        </p>
      </div>

      <button class="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
        <span class="text-base">افزودن به سبد خرید</span>
        <span class="material-symbols-outlined text-[20px]">shopping_cart</span>
      </button>
    </div>
  );
}
