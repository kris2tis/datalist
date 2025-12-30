"use client";
import Link from "next/link";
import Img from "../../ui/img";
import { authClient } from "../../../../../lib/auth-client";

export const Header = () => {
  const { data } = authClient.useSession();
  const user = data?.user?.id;
  const cartCount = data?.user?.cart?._count?.productItems || 0;
  return (
    <header class="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm backdrop-blur-md bg-opacity-95">
      <div class="mx-auto px-4 lg:px-8">
        <div class="flex items-center justify-between h-20 gap-8">
          <div class="flex items-center gap-8 flex-1">
            <Link href={"/"}>
              <Img
                src={"/brand/logo.svg"}
                alt={"cart icon"}
                className={"h-20 aspect-video"}
              />
            </Link>

            <div class="hidden md:flex flex-1 max-w-xl relative group">
              <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <Img
                  src={"/icons/search.svg"}
                  alt={"cart icon"}
                  className={"h-5 aspect-video"}
                />
              </div>
              <input
                class="block w-full h-12 pr-12 pl-4 rounded-2xl bg-neutral-100 border-transparent focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all text-sm font-medium"
                placeholder="جستجو در هزاران محصول..."
                type="text"
              />
            </div>
          </div>
          <div class="flex items-center gap-4">
            <Link href={`/${user ? "profile" : "sign-in"}`}>
              <button class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-text-main hover:bg-neutral-100 transition-colors">
                <Img
                  src={"/icons/profile.svg"}
                  alt={"profile icon"}
                  className={"h-5 aspect-square"}
                />
                <span class="hidden sm:inline">
                  {user ? "حساب کاربری" : "ورود به حساب"}
                </span>
              </button>
            </Link>

            <button class="relative p-3 bg-neutral-100 hover:bg-primary/10 hover:text-primary text-text-main rounded-xl transition-all duration-300 group">
              <Img
                src={"/icons/cart.svg"}
                alt={"cart icon"}
                className={"h-5 aspect-square"}
              />
              <span class="absolute -top-1.5 -left-1.5 min-w-5 h-5 bg-primary text-white text-[11px] font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
