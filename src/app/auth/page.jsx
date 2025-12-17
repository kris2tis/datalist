"use client";

import { toast } from "sonner";
import { http } from "../../httpServices";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { push } = useRouter();
  return (
    <form
      className="flex flex-col gap-y-3"
      onSubmit={async (e) => {
        e.preventDefault();
        const data = {
          name: e.target.name.value,
          email: e.target.email.value,
        };
        console.log(data);
        try {
          const { message } = await http
            .post("/auth", data)
            .then(({ data }) => data);
          toast.success(message);
          push("/");
        } catch (error) {
          const errorMessage = error?.response?.data?.message;
          console.log(error);
          toast.error(errorMessage);
        }
      }}
    >
      <h1 className="my-5 font-bold text-[20px]">ثبت نام در سایت</h1>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-white flex items-center gap-2">
            نام و نام خانوادگی
          </label>
          <input
            class="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
            placeholder="مثال: علی"
            required=""
            name="name"
            type="text"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-white flex items-center gap-2">
            آدرس ایمیل
          </label>
          <input
            class="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
            name="email"
            placeholder="example@store.com"
            required=""
            type="email"
          />
        </div>

        <button
          class="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary hover:bg-green-500 text-white font-bold text-sm shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
          type="submit"
        >
          ثبت نام
        </button>
      </div>
    </form>
  );
}
