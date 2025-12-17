import "../style/globals.css";

import Image from "next/image";
import { modam } from "../constants/font";
import BottomNav from "../shared/components/layout/bottom-nav";
import DropDown from "../shared/components/layout/drop-down";
import { Toaster } from "sonner";

export const metadata = {
  title: "دیتالیست",
  description: "اینجا دیتا هاتو جمع میکنیم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${modam.variable} flex flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden antialiased`}
      >
        <header className="sticky py-5 top-0 z-50 flex items-center bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-4 justify-between border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <div classNameName="relative h-15 aspect-sqare">
              <Image src={"/images/logo.svg"} fill alt="website logo" />
            </div>
          </div>
        </header>
        <main className="p-2 flex-1 ">
          {children} <BottomNav /> <DropDown />
          <Toaster
            style={{ fontFamily: "inherit" }}
            position="top-center"
            toastOptions={{
              classNames: { success: "succes-toast", error: "error-toast" },
            }}
          />
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
      </body>
    </html>
  );
}
