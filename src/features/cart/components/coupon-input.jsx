export default function CouponInput() {
  return (
    <div class="mt-2">
      <label class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2 mr-1">
        کد تخفیف
      </label>
      <div class="relative flex items-center">
        <input
          class="w-full bg-white dark:bg-[#151c2b] border border-gray-200 dark:border-gray-700 
                      rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 
                      focus:border-primary transition-all text-right shadow-sm placeholder-gray-400"
          placeholder="کد تخفیف را وارد کنید"
          type="text"
        />

        <button
          class="absolute left-1.5 top-1.5 bottom-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 
                       dark:text-gray-300 px-4 rounded-lg text-xs font-bold hover:bg-primary 
                       hover:text-white dark:hover:bg-primary transition-colors"
        >
          ثبت
        </button>
      </div>
    </div>
  );
}
