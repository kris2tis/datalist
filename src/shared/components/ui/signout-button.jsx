"use client";
import { useRouter } from "next/navigation";
import { authClient } from "../../../../lib/auth-client";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";

export default function SignoutButton() {
  const { push } = useRouter();
  const signoutHandler = async () => {
    const { error } = await authClient.signOut();
    if (!error?.message || !error?.status) {
      toast.success("از حساب خارج شدی");
      push("/")
    }
  };

  return (
    <Link
      onClick={signoutHandler}
      href="#"
      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 text-[#9db8a6] hover:text-red-400 transition-colors"
    >
      <div className="relative h-4 aspect-square">
        <Image src={"/icons/signout.svg"} fill alt="sign out icon" />
      </div>
      <p className="text-sm font-medium leading-normal">خروج</p>
    </Link>
  );
}
