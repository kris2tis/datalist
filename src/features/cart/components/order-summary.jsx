import Image from "next/image";
import React from "react";
import CheckoutCTA from "./checkout-cta";
import Img from "@/shared/components/ui/img";

export default function OrderSummary({ data }) {
  const { Count, productItems: itemCount } = data.cart;
  const total = Count.toLocaleString();

  return (
    <>
      <div className="lg:col-span-4">
        <div className="sticky top-28 space-y-4">
          <div className="bg-white  rounded-3xl border border-neutral-100 overflow-hidden shadow-soft p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-black text-neutral-800  text-lg">
                خلاصه سفارش
              </h2>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-500">
                  قیمت کالاها ({itemCount.length})
                </span>
                <span className="font-bold text-neutral-800">
                  {Count.toLocaleString()}
                  <span className="text-xs font-normal text-neutral-400">
                    تومان
                  </span>
                </span>
              </div>
              {/* <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-500">سود شما از خرید</span>
                <span className="font-bold text-primary">
                  (۳٪) ۱,۳۷۱,۰۰۰{" "}
                  <span className="text-xs font-normal text-neutral-400">
                    تومان
                  </span>
                </span>
              </div> */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-500 ">هزینه ارسال</span>
                <span className="font-bold text-neutral-800 ">رایگان</span>
              </div>
            </div>
            <hr className="border-dashed border-neutral-200  mb-6" />
            <div className="flex items-center justify-between mb-8">
              <span className="font-black text-neutral-800 ">جمع سبد خرید</span>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-neutral-900  tracking-tight">
                    {Count.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-neutral-500">
                    تومان
                  </span>
                </div>
              </div>
            </div>
            <button className="w-full group relative overflow-hidden bg-primary  text-white rounded-2xl py-4 transition-all shadow-[0_8px_20px_-6px_rgba(239,64,86,0.5)] hover:shadow-[0_12px_25px_-5px_rgba(239,64,86,0.6)] transform hover:-translate-y-1 active:scale-95 active:shadow-none hidden lg:flex items-center justify-center">
              <div className="relative z-10 flex items-center justify-center gap-2 font-black text-lg">
                <Img
                  src={"/icons/addToCart.svg"}
                  alt={"add to cart Icon"}
                  className={"h-5 aspect-square"}
                />
               <span  className="text-lg">تسویه حساب</span>
              </div>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <div className="mt-6 bg-neutral-50 p-4 rounded-2xl flex items-start gap-3">
              <p className="text-xs leading-6 text-neutral-500 text-justify">
                کالاهای موجود در سبد خرید شما ثبت و رزرو نشده‌اند، برای تکمیل
                مراحل خرید سفارش خود را ثبت کنید.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-50 lg:hidden flex items-center justify-between gap-4">
        <div className="flex flex-col items-start gap-1">
          <span className="text-[10px] font-bold text-neutral-400">
            جمع قابل پرداخت
          </span>
          <div className="flex items-center gap-1">
            <span className="text-xl font-black text-neutral-900  tracking-tight">
              {Count.toLocaleString()}
            </span>
            <span className="text-[10px] font-bold text-neutral-500">
              تومان
            </span>
          </div>
        </div>
        <button className="flex-1 group relative overflow-hidden bg-primary  text-white rounded-xl py-3.5 transition-all shadow-md active:scale-95">
          <div className="relative z-10 flex items-center justify-center gap-2 font-bold text-base">
            <Img
              src={"/icons/addToCart.svg"}
              alt={"add to cart Icon"}
              className={"h-5 aspect-square"}
            />
            تسویه حساب
          </div>
        </button>
      </div>
    </>
  );
}
