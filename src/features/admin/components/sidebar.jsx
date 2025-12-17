// components/Layout/Sidebar.jsx

import Image from "next/image";
import Link from "next/link";

// زیر کامپوننت برای آیتم‌های ناوبری
const NavItem = ({ href, icon, label, active = false }) => {
  const baseClasses =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors";
  const activeClasses =
    "bg-primary/20 text-primary border border-primary/10 font-bold";
  const inactiveClasses =
    "hover:bg-white/5 text-[#9db8a6] hover:text-white font-medium";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
    >
      <p className="text-sm leading-normal">{label}</p>
    </Link>
  );
};

export default function Sidebar() {
  return (
    <aside className="flex w-64 flex-col border-l border-[#29382e] bg-[#111813] dark:bg-background-dark h-full hidden md:flex shrink-0">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          {/* Brand / User Info */}
          <div className="flex gap-3 items-center px-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-[#29382e]"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBftW-cZFodfT2gpNyAl69Urg5ulZV9uj_gZQp2PNSmZIPs6cbEDz5yZv71k55GO0H7b385xy6dhwBmP7-MSLYT4vhZQRovhYcay9gQ8YRUp5aVvB8vzR2XYa7CdjmYnWsT_94MADN7rEanLh1KRMPkO4AXRkl-2Ycm3LbY3X2EDFDaWTLOO6kFGDJjWUWfSevNHNxSJfFBwvN83LFOdebuCTct-kVQwITh_roOkTzG8HhlY7KmHu6ixx9EJTNywjByjY1SATnq-Jfv")',
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-white text-base font-bold leading-normal">
                ادمین استور
              </h1>
              <p className="text-[#9db8a6] text-xs font-normal leading-normal">
                مدیر ارشد فروشگاه
              </p>
            </div>
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            <NavItem href="/admin" icon="dashboard" label="داشبورد" active={true} />
            <NavItem href="/admin/payment" icon="shopping_bag" label="سفارش‌ها" />
            <NavItem href="/admin/products" icon="inventory_2" label="محصولات" />
          </nav>
        </div>
        {/* Bottom Settings */}
        <div className="flex flex-col gap-2">
          <NavItem href="#" icon="settings" label="تنظیمات" />
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 text-[#9db8a6] hover:text-red-400 transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium leading-normal">خروج</p>
          </Link>
        </div>
      </div>
    </aside>
  );
}
