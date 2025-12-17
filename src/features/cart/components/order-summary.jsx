import Image from "next/image";
import React from "react";
import CheckoutCTA from "./checkout-cta";

export default function OrderSummary({ data }) {
  const { Count, productItems: itemCount } = data.cart;
  const total = Count.toLocaleString();

  return (
    <div
      class="mt-6 px-3 py-5 bg-white dark:bg-[#151c2b] rounded-2xl border border-gray-100 
            dark:border-gray-800 shadow-sm"
    >
      <h4 class="text-sm font-bold text-[#111318] dark:text-white mb-4 flex items-center gap-2">
        <div className="relative h-5 aspect-square">
          <Image src={"/icons/paper.svg"} alt="logn arrow icon" fill />
        </div>
        جزئیات پرداخت
      </h4>

      <div class="space-y-3">
        <div class="flex justify-between items-center">
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            مجموع اقلام {itemCount?.length || 0}
          </p>
          <p class="text-[#111318] dark:text-white text-sm font-medium">
            <span class="text-xs font-normal text-gray-400">{total}تومان</span>
          </p>
        </div>

        <div class="flex justify-between items-center">
          <p class="text-gray-500 dark:text-gray-400 text-sm">تخفیف</p>
          <p class="text-emerald-600 dark:text-emerald-400 text-sm font-medium">
            <span class="text-xs font-normal opacity-80">0 تومان</span>
          </p>
        </div>

        <div class="flex justify-between items-center pb-3 border-b border-dashed border-gray-200 dark:border-gray-700">
          <p class="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
            مالیات بر ارزش افزوده
          </p>
          <p class="text-[#111318] dark:text-white text-sm font-medium">
            {/* {tax || 0}{" "} */}
            <span class="text-xs font-normal text-gray-400">0 تومان</span>
          </p>
        </div>

        <div class="flex justify-between items-center pt-1">
          <p class="text-[#111318] dark:text-white font-bold">
            مبلغ قابل پرداخت
          </p>
          <p class="text-primary dark:text-blue-400 font-extrabold text-lg">
            {total}{" "}
            <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">
              تومان
            </span>
          </p>
        </div>
      </div>
      <CheckoutCTA data={data} />
    </div>
  );
}
