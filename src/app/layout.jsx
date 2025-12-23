import "../style/globals.css";
import { modam } from "../constants/font";
import DropDown from "../shared/components/layout/drop-down";
import { Toaster } from "sonner";

export const metadata = {
  title: "دیتالیست",
  description: "اینجا دیتا هاتو جمع میکنیم",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${modam.variable} flex flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden antialiased`}
      >
       
        <main className="p-2 flex-1 ">
          {children}  <DropDown />
          <Toaster
            style={{ fontFamily: "inherit" }}
            position="top-center"
            toastOptions={{
              classNames: { success: "succes-toast", error: "error-toast" },
            }}
          />
        </main>
    
      </body>
    </html>
  );
}
