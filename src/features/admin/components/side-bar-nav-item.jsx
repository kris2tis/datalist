"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ href, icon, label, name }) {
  const getPathname = usePathname();
  const pathname = getPathname.split("/");
  const active =
    pathname.length <= 2 ? pathname[1] === name : pathname[2] === name;

  const baseClasses =
    "flex items-center gap-3 px-4 py-3 rounded-xl";
  const activeClasses =
    "bg-primary/10 text-primary border border-primary/10 font-bold";
  const inactiveClasses =
    "hover:bg-white/5 text-[#9db8a6] hover:text-white font-medium";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses} transition-all duration-500`}
    >
      <p className="text-sm leading-normal">{label}</p>
    </Link>
  );
}
