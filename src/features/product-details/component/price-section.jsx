import React from "react";

export default function PriceSection() {
  return (
   <div class="p-4 pt-0">
    <div class="p-4 bg-gray-50 dark:bg-[#151c2b] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
        
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div class="flex items-center gap-2">
                <p class="text-2xl font-extrabold text-primary dark:text-blue-400">
                    ۸,۵۰۰,۰۰۰ 
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400">تومان</span>
                </p>
            </div>
            
            <div class="flex items-center gap-3">
                <span class="text-sm text-gray-400 line-through">
                    ۱۰,۰۰۰,۰۰۰ 
                    <span class="text-xs">تومان</span>
                </span>
                <span class="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    ۱۵٪
                </span>
            </div>
        </div>

        <div class="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm font-bold">
            <span class="material-symbols-outlined text-[20px] fill-1">timer</span>
            فقط ۳ روز و ۴ ساعت تا پایان تخفیف
        </div>
    </div>
</div>
  );
}
