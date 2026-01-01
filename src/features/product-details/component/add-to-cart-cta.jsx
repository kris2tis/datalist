"use client";
import { http } from "@/httpServices";
import Img from "@/shared/components/ui/img";
import { toast } from "sonner";
import { authClient } from "../../../../lib/auth-client";

export default function AddToCartCTA({ productId }) {
  const { data } = authClient.useSession();

  const addToCart = async () => {
    if (!data?.user?.id) return toast.warning("ابتدا باید وارد سایت شوید");
    try {
      const { message } = await http
        .post(
          "/user/cart",
          { productId: productId },
        )
        .then(({ data }) => data);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div  className="lg:col-span-3">
      {/* Desktop */}
      <div  className="sticky top-24 bg-white dark:bg-[#1e1e1e] rounded-3xl border border-neutral-100 dark:border-neutral-700 overflow-hidden shadow-soft hidden lg:block">
        {/* <div  className="p-5 bg-neutral-50/50 dark:bg-neutral-800/50 border-b border-neutral-100 dark:border-neutral-700/50">
                  <div  className="flex justify-between items-start mb-4">
                    <h3  className="font-black text-neutral-800 dark:text-white">
                      فروشنده
                    </h3>
                    <span  className="text-[10px] text-cyan-600 bg-cyan-50 dark:bg-cyan-900/30 px-2 py-1 rounded-full font-bold">
                      برگزیده
                    </span>
                  </div>
                  <div  className="flex items-start gap-3 mb-4">
                    <div  className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-primary">
                      <span  className="material-symbols-outlined">storefront</span>
                    </div>
                    <div>
                      <p  className="font-bold text-sm text-neutral-800 dark:text-neutral-200">
                        فروشگاه من
                      </p>
                      <div  className="flex items-center gap-3 mt-1 text-xs">
                        <span  className="text-green-600 font-bold">۹۲٪ رضایت</span>
                        <span  className="w-1 h-1 rounded-full bg-neutral-300"></span>
                        <span  className="text-neutral-500">عملکرد عالی</span>
                      </div>
                    </div>
                  </div>
                  <hr  className="border-dashed border-neutral-200 dark:border-neutral-700 my-3" />
                  <div  className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                    <span  className="material-symbols-outlined text-base text-neutral-400">
                      verified_user
                    </span>
                    گارانتی ۱۸ ماهه شرکتی
                  </div>
                </div> */}
        <div  className="p-5 flex flex-col gap-6">
          {/* <div  className="flex items-center justify-between text-sm">
                    <div  className="flex items-center gap-2 font-bold text-neutral-700 dark:text-neutral-300">
                      <span  className="w-2 h-2 rounded-full bg-cyan-500"></span>
                      موجود در انبار
                    </div>
                    <span  className="text-xs text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                      ارسال فردا
                    </span>
                  </div> */}
          <div  className="flex flex-col items-end gap-1 mt-2">
            {/* Discount */}
            {/* <div  className="flex items-center gap-2">
                      <span  className="text-sm line-through text-neutral-400">
                        ۴۶,۲۰۰,۰۰۰
                      </span>
                      <span  className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        ۳٪
                      </span>
                    </div> */}
            <div  className="flex items-center gap-1">
              <span  className="text-xl font-black text-neutral-900 dark:text-white tracking-tight">
                ۴۵,۰۰۰,۰۰۰
              </span>
              <span  className="text-xs font-bold text-neutral-500 mb-2 mr-1">
                تومان
              </span>
            </div>
          </div>
          <button
            onClick={addToCart}
             className="w-full group relative overflow-hidden bg-primary hover:bg-primary-dark text-white rounded-2xl py-4  shadow-[0_8px_20px_-6px_rgba(239,64,86,0.5)] transform hover:-translate-y-1 cursor-pointer"
          >
            <div  className="relative z-10 flex items-center justify-center gap-2 font-black text-lg">
              <Img
                className={"h-5 aspect-square"}
                src={"/icons/addToCart.svg"}
                alt={"add to cart icon"}
              />
              <span className="text-md">افزودن به سبد</span>
            </div>
            <div  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
          {/* <div  className="flex flex-col gap-2 text-xs text-neutral-500 mt-2">
                    <div  className="flex items-center justify-between">
                      <div  className="flex items-center gap-1">
                        <span  className="material-symbols-outlined text-base text-yellow-500">
                          loyalty
                        </span>
                        <span>۱۵۰ امتیاز فروشگاه من</span>
                      </div>
                      <span
                         className="material-symbols-outlined text-base cursor-help"
                        title="اطلاعات بیشتر"
                      >
                        info
                      </span>
                    </div>
                  </div> */}
        </div>
      </div>
      {/* Mobile */}
      <div  className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1e1e1e] border-t border-neutral-200 dark:border-neutral-800 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-50 lg:hidden flex items-center justify-between gap-4">
        <div  className="flex flex-col items-start gap-1">
          <div  className="flex items-center gap-1">
            <span  className="text-lg font-black text-neutral-900 dark:text-white tracking-tight">
              ۴۵,۰۰۰,۰۰۰
            </span>
            <span  className="text-xs font-bold text-neutral-500">تومان</span>
          </div>
          <span  className="text-xs text-neutral-400 line-through">۴۶,۲۰۰,۰۰۰</span>
        </div>
        <button
          onClick={addToCart}
           className="flex-1 group relative overflow-hidden bg-primary hover:bg-primary-dark text-white rounded-xl py-3 transition-all shadow-md active:scale-95"
        >
          <div  className="relative z-10 flex items-center justify-center gap-2 font-bold text-base">
            <Img
              className={"h-5 aspect-square"}
              src={"/icons/addToCart.svg"}
              alt={"add to cart icon"}
            />
            افزودن به سبد
          </div>
        </button>
      </div>
    </div>
  );
}
