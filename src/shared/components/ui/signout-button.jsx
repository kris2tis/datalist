"use client";
import { useRouter } from "next/navigation";
import { authClient } from "../../../../lib/auth-client";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { LogoutIcon } from "@/shared/assets/icons/icons";

export default function SignoutButton() {
  const { push } = useRouter();
  const signoutHandler = async () => {
    const { error } = await authClient.signOut();
    if (!error?.message || !error?.status) {
      toast.success("از حساب خارج شدی");
      push("/");
    }
  };

  return (
    <Link
      onClick={signoutHandler}
      href="#"
      className="group bg-primary/10 text-primary border border-primary/10 font-bold transition-all duration-500 flex items-center  gap-3 px-4 py-3 rounded-xl"
    >
      <LogoutIcon fill="fill-primary" />

      <span className="font-medium leading-normal">خروج</span>
    </Link>
  );
}
