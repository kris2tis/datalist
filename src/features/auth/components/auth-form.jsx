"use client";
import { useRouter } from "next/navigation";
import { http } from "../../../httpServices";
import { toast } from "sonner";

export default function AuthForm({ mode }) {
  const { refresh , push } = useRouter();
  const signUpHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(data)
    try {
      const { message } = await http
        .post("/user/auth", data)
        .then(({ data }) => data);

      toast.success(message);
      push("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطا");
      console.log(error);
    }
  };
  const signInHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    try {
      const { message } = await http
        .post("/user/sign-in", data)
        .then(({ data }) => data);
      refresh();
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطا");
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    mode === "sign-up" ? signUpHandler(e) : signInHandler(e);
  };
  return (
    <div className="max-w-[400px] mx-auto">
      <div class="dark:bg-surface-dark rounded-2xl shadow-xl border border-border-dark overflow-hidden">
        <div class="pt-8 pb-2 px-8 text-center">
          <h1 class="text-2xl sm:text-3xl font-bold text-white mb-2">
            {mode === "sign-up" ? "ثبت نام در سایت" : "ورود به سایت"}
          </h1>
        </div>
        <div class="p-8 pt-6">
          <form onSubmit={handleFormSubmit} class="flex flex-col gap-5">
            {mode === "sign-up" && (
              <div class="space-y-2">
                <label
                  class="text-sm font-medium  text-white flex items-center gap-2"
                  for="name"
                >
                  نام
                </label>
                <input
                  class="w-full h-12 px-4 rounded-lg  -[#111813] border  border-[#3c5344] text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  id="name"
                  name="name"
                  placeholder="مهدی رضایی"
                />
              </div>
            )}

            <div class="space-y-2">
              <label
                class="text-sm font-medium  text-white flex items-center gap-2"
                for="email"
              >
                ایمیل
              </label>
              <input
                class="w-full h-12 px-4 rounded-lg  -[#111813] border  border-[#3c5344] text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                id="email"
                name="email"
                placeholder="mhdr@gmail.com"
                type="email"
              />
            </div>
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <label
                  class="text-sm font-medium text-white flex items-center gap-2"
                  for="password"
                >
                  رمز عبور
                </label>
              </div>
              <div class="relative">
                <input
                  class="w-full h-12 px-4  rounded-lg bg-[#111813] border border-gray-300 dark:border-[#3c5344] text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            </div>
            <button class="mt-2 w-full h-12 bg-primary hover:bg-primary/90 text-[#0a2e16] font-bold rounded-lg transition-all duration-200  hover:-translate-y-0.5 active:translate-y-0 text-base">
              {mode === "sign-up" ? "ثبت نام " : "ورود "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
