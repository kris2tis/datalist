import React from "react";

export default function ProductInfo({ title, price }) {
  return (
    <div  className="lg:col-span-5 flex flex-col gap-6 ">
      <div  className="border-b border-neutral-100 pb-6">
        {/* <div  className="flex items-center gap-2 mb-2 text-primary font-bold text-sm">
              <span>برند: اپل</span>
              <span  className="w-1 h-1 rounded-full bg-neutral-300"></span>
              <span>مدل: iPhone 13</span>
            </div> */}
        <h1  className="text-xl lg:text-3xl font-black leading-tight mb-3 text-neutral-900 tracking-tight">
          {title}
        </h1>
        {/* <div  className="flex items-center gap-2 mb-4">
              <span  className="text-neutral-400 text-sm font-sans font-medium ltr">
                Apple iPhone 13 CH Dual SIM 128GB Mobile Phone
              </span>
            </div> */}
        {/* Stars */}
        {/* <div  className="flex flex-wrap items-center gap-4 text-sm select-none">
              <div  className="flex items-center gap-1.5 text-neutral-700 dark:text-white bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-md">
                <span  className="material-symbols-outlined text-lg text-yellow-500 fill-current">
                  star
                </span>
                <span  className="font-bold">۴.۴</span>
                <span  className="text-neutral-400 text-xs">(۱۲۵۰)</span>
              </div>
              <a
                 className="text-cyan-600 hover:text-cyan-700 font-bold hover:underline decoration-2 underline-offset-4"
                href="#comments"
              >
                ۸۵۰ دیدگاه
              </a>
              <span  className="w-1 h-1 rounded-full bg-neutral-300"></span>
              <a
                 className="text-cyan-600 hover:text-cyan-700 font-bold hover:underline decoration-2 underline-offset-4"
                href="#qa"
              >
                ۱۲۰ پرسش
              </a>
            </div> */}
      </div>
      <div  className="space-y-6">
        {/* Colors */}
        {/* <div>
              <span  className="block text-base font-bold mb-3">
                رنگ: <span  className="text-neutral-500 font-normal">مشکی</span>
              </span>
              <div  className="flex flex-wrap gap-3">
                <label  className="cursor-pointer group relative">
                  <input
                    checked=""
                     className="peer sr-only"
                    name="color"
                    type="radio"
                  />
                  <div  className="w-12 h-12 rounded-2xl bg-black border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 ring-offset-2 dark:ring-offset-neutral-900 transition-all flex items-center justify-center shadow-sm">
                    <span  className="material-symbols-outlined text-white text-lg opacity-0 peer-checked:opacity-100 transition-all scale-0 peer-checked:scale-100">
                      check_circle
                    </span>
                  </div>
                  <span  className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                    مشکی
                  </span>
                </label>
                <label  className="cursor-pointer group relative">
                  <input  className="peer sr-only" name="color" type="radio" />
                  <div  className="w-12 h-12 rounded-2xl bg-blue-600 border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 ring-offset-2 dark:ring-offset-neutral-900 transition-all flex items-center justify-center shadow-sm">
                    <span  className="material-symbols-outlined text-white text-lg opacity-0 peer-checked:opacity-100 transition-all scale-0 peer-checked:scale-100">
                      check_circle
                    </span>
                  </div>
                </label>
                <label  className="cursor-pointer group relative">
                  <input  className="peer sr-only" name="color" type="radio" />
                  <div  className="w-12 h-12 rounded-2xl bg-pink-200 border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 ring-offset-2 dark:ring-offset-neutral-900 transition-all flex items-center justify-center shadow-sm">
                    <span  className="material-symbols-outlined text-neutral-600 text-lg opacity-0 peer-checked:opacity-100 transition-all scale-0 peer-checked:scale-100">
                      check_circle
                    </span>
                  </div>
                </label>
              </div>
            </div> */}
        {/* Memory */}
        {/* <div>
              <span  className="block text-base font-bold mb-3">حافظه داخلی:</span>
              <div  className="flex flex-wrap gap-3">
                <label  className="cursor-pointer flex-1 min-w-[120px]">
                  <input
                    checked=""
                     className="peer sr-only"
                    name="storage"
                    type="radio"
                  />
                  <div  className="px-4 py-3 rounded-xl border-2 border-neutral-100 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 peer-checked:border-primary peer-checked:text-primary peer-checked:bg-red-50 dark:peer-checked:bg-red-900/10 transition-all font-bold text-sm text-center shadow-sm hover:border-neutral-300 dark:hover:border-neutral-600">
                    ۱۲۸ گیگابایت
                  </div>
                </label>
                <label  className="cursor-pointer flex-1 min-w-[120px]">
                  <input  className="peer sr-only" name="storage" type="radio" />
                  <div  className="px-4 py-3 rounded-xl border-2 border-neutral-100 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 peer-checked:border-primary peer-checked:text-primary peer-checked:bg-red-50 dark:peer-checked:bg-red-900/10 transition-all font-bold text-sm text-center shadow-sm hover:border-neutral-300 dark:hover:border-neutral-600">
                    ۲۵۶ گیگابایت
                  </div>
                </label>
              </div>
            </div> */}
        {/* Properties */}
        <div>
          {/* <h3  className="text-sm font-bold mb-3 text-neutral-700">
            ویژگی‌های برجسته
          </h3>
          <div  className="grid grid-cols-2 gap-3">
            <div  className="bg-neutral-50 dark:bg-neutral-800 p-3 rounded-2xl flex items-center gap-3 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-700">
              <div  className="flex flex-col">
                <span  className="text-[10px] text-neutral-500 font-bold">
                  صفحه‌نمایش
                </span>
                <span  className="text-xs font-black text-neutral-800 dark:text-white mt-0.5">
                  6.1 inch OLED
                </span>
              </div>
            </div>
          </div> */}
          {/* <div  className="mt-3">
                <a
                   className="text-cyan-600 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all"
                  href="#specs"
                >
                  مشاهده تمام مشخصات فنی
                  <span  className="material-symbols-outlined text-sm">
                    arrow_back
                  </span>
                </a>
              </div> */}
        </div>
      </div>
    </div>
  );
}
