import Image from "next/image";
import BottomNav from "../../shared/components/layout/bottom-nav";
import Link from "next/link";

export default function layout({ children }) {
  return (
    <>
      <header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-background-dark/90">
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div class="flex items-center gap-3">
            <div className="relative h-20 aspect-square">
              <Image src={"/images/logo.svg"} fill alt="logo icon" />
            </div>
          </div>
          <nav class="hidden md:flex md:items-center md:gap-1">
            <Link
              href={"/"}
              class="group relative rounded-lg px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-primary"
            >
              {" "}
              صفحه اصلی
            </Link>
            <Link
              href={"/products"}
              class="group relative rounded-lg px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-primary"
            >
              {" "}
              صفحه محصولات
            </Link>
            <Link
              href={"/cart"}
              class="group relative rounded-lg px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-primary"
            >
              {" "}
              صفحه سبد خرید
            </Link>

            <Link
              href={"/feedback"}
              class="group relative rounded-lg px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-primary"
            >
              {" "}
              صفحه نضرات و انتقادات
            </Link>
          </nav>
          <div class="flex items-center gap-4">
            <Link
              href={"/profile"}
              class="hidden items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 md:flex"
            >
              <div className="relative h-4 aspect-square">
                <Image src={"/icons/profile.svg"} fill alt="logo icon" />
              </div>
              <span>حساب کاربری</span>
            </Link>
          </div>
        </div>
        <div
          class="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-background-dark md:hidden"
          id="mobile-menu"
        >
          <div class="space-y-1 px-4 py-4 pb-6">
            <a
              class="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 hover:text-primary dark:text-white dark:hover:bg-gray-800"
              href="#"
            >
              <span class="material-symbols-outlined text-gray-400 group-hover:text-primary">
                home
              </span>
              صفحه اصلی
            </a>
            <a
              class="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 hover:text-primary dark:text-white dark:hover:bg-gray-800"
              href="#"
            >
              <span class="material-symbols-outlined text-gray-400 group-hover:text-primary">
                inventory_2
              </span>
              صفحه محصولات
            </a>
            <a
              class="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 hover:text-primary dark:text-white dark:hover:bg-gray-800"
              href="#"
            >
              <span class="material-symbols-outlined text-gray-400 group-hover:text-primary">
                shopping_cart
              </span>
              صفحه سبد خرید
              <span class="mr-auto inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                2
              </span>
            </a>
            <a
              class="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 hover:text-primary dark:text-white dark:hover:bg-gray-800"
              href="#"
            >
              <span class="material-symbols-outlined text-gray-400 group-hover:text-primary">
                feedback
              </span>
              صفحه نضرات و انتقادات
            </a>
            <div class="my-2 h-px bg-gray-100 dark:bg-gray-800"></div>
            <a
              class="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 hover:text-primary dark:text-white dark:hover:bg-gray-800"
              href="#"
            >
              <span class="material-symbols-outlined text-gray-400 group-hover:text-primary">
                person
              </span>
              صفحه پروفایل
            </a>
          </div>
        </div>
      </header>
      <main>
        {children}
        <BottomNav />
      </main>
      <footer className="px-4 py-8 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
        <div className="flex flex-col gap-6 text-right">
          <div className="flex items-center gap-2"></div>
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-500 dark:text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">
              ویژگی‌ها
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              درباره ما
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              قیمت‌گذاری
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              تماس
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              حریم خصوصی
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              قوانین و مقررات
            </a>
          </div>
          <div
            className="text-xs text-slate-400 pt-4 border-t border-gray-100 dark:border-gray-800"
            dir="ltr"
          >
            همه قوانین
          </div>
        </div>
      </footer>
    </>
  );
}
