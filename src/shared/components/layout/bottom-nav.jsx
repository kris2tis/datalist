"use client";
import Link from "next/link";
import {
  CartIcon,
  HomeIcon,
  ProductIcon,
  ProfileIcon,
} from "../../../shared/assets/icons/icons";
import React from "react";
import { usePathname } from "next/navigation";

const NavItem = ({ icon, label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const classes = isActive
    ? "text-white"
    : "text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors";
  const iconFill = isActive ? "fill-white" : "fill-gray-500";
  const Icon = icon;
  return (
    <button
      className={`flex flex-col items-center justify-center gap-1 w-full ${classes}`}
    >
      <Link href={href}>
        <Icon fill={iconFill} />
      </Link>

      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
};

const bottomNavigation = [
  { label: "خانه", icon: HomeIcon, href: "/" },
  { label: "سبد خرید", icon: CartIcon, href: "/cart" },
  { label: "محصولات", icon: ProductIcon, href: "/products" },
  { label: "پروفایل", icon: ProfileIcon, href: "/profile" },
];

const BottomNav = () => {
  return (
    <nav className="lg:hidden fixed bottom-0 w-full bg-background-dark border-t border-gray-200 dark:border-gray-800 pb-safe pt-2 z-50">
      <div className="flex justify-around items-center h-14">
        {bottomNavigation.map((n, index) => (
          <NavItem key={index} {...n} />
        ))}
      </div>
      {/* Safe area padding for iPhone home indicator */}
      <div className="h-4 w-full"></div>
    </nav>
  );
};

export default BottomNav;
