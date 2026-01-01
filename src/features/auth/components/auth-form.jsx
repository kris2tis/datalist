"use client";
import { useRouter } from "next/navigation";
import { http } from "../../../httpServices";
import { toast } from "sonner";
import Img from "@/shared/components/ui/img";
import Link from "next/link";

export default function AuthForm({ mode }) {
  const { refresh, push } = useRouter();
  const signUpHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      const { message } = await http
        .post("/user/auth", data)
        .then(({ data }) => data);

      toast.success(message);
      push("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطا");
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
    <div  className="mx-auto my-2 w-full max-w-[1200px] h-screen lg:h-[800px] bg-white  lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row-reverse shadow-none border border-neutral-100 ">
      <div  className="w-full lg:w-1/2 flex flex-col justify-center relative bg-white  order-2 h-full overflow-y-auto no-scrollbar">
        <div  className="flex flex-col w-full max-w-md mx-auto p-8 animate-fade-in">
          <div  className="mb-10 text-center lg:text-left">
            <h1  className="text-4xl font-bold text-primary mb-3">خوشحالم برگشتی</h1>
            <p  className="text-neutral-500 text-sm">
              ایمیل و رمز عبور را وارد کنید
            </p>
          </div>
          <form onSubmit={handleFormSubmit}  className="space-y-5">
            {mode === "sign-up" && (
              <div  className="space-y-1.5">
                <label  className="text-xs font-bold text-neutral-800 " for="email">
                  نام و نام خانوادگی
                </label>
                <input
                   className="w-full px-4 py-3 rounded-lg bg-neutral-100  border-none focus:ring-1 focus:ring-primary outline-none transition-all text-neutral-800  placeholder-neutral-400 text-sm"
                  name="name"
                  type="نام"
                />
              </div>
            )}
            <div  className="space-y-1.5">
              <label  className="text-xs font-bold text-neutral-800 " for="email">
                ایمیل
              </label>
              <input
                 className="w-full px-4 py-3 rounded-lg bg-neutral-100  border-none focus:ring-1 focus:ring-primary outline-none transition-all text-neutral-800  placeholder-neutral-400 text-sm"
                id="email"
                type="email"
              />
            </div>
            <div  className="space-y-1.5">
              <label  className="text-xs font-bold text-neutral-800 " for="password">
                رمز عبور
              </label>
              <div>
                <input
                   className="w-full px-4 py-3 rounded-lg bg-neutral-100  border-none focus:ring-1 focus:ring-primary outline-none transition-all text-neutral-800  placeholder-neutral-400 text-sm"
                  id="password"
                />
              </div>
            </div>
            <div  className="flex items-center justify-between py-2">
              {/* Forget Password */}
              {/* <label  className="flex items-center gap-2 cursor-pointer group">
                <div  className="relative flex items-center">
                  <input
                     className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-neutral-300 transition-all checked:border-primary checked:bg-primary"
                    type="checkbox"
                  />
                  <span  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                    <svg
                       className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <span  className="text-xs font-medium text-neutral-500 group-hover:text-neutral-700 ">
                  یادت بمونه
                </span>
              </label> */}
              {/* <a
                 className="text-xs font-bold text-neutral-600 hover:text-primary transition-colors"
                href="#"
              >
                فراموشی رمز؟
              </a> */}
            </div>
            <button
               className="w-full bg-primary cursor-pointer  text-white font-bold py-3 rounded-lg transition-all active:scale-[0.98] shadow-none mt-2"
              type="submit"
            >
              ورود
            </button>
            {/* Sign in or Signup with Goggle */}
            {/* <button
               className="w-full bg-white hover:bg-neutral-50  border border-neutral-200 text-neutral-700  font-bold py-3 rounded-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 mt-3 shadow-none group"
              type="button"
            >
              <img
                alt="Google Logo"
                 className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7p2amOhFxcmnimZA5s2JumSD55ChZ4RlDpp1xTR1HSg1W0j-Ukm5Du9G-qGmfbLfDCXohdvg3A0g4hwnH0J0UOiInxk2gbWdfiNLhyGt7YdoAGeAZWnbZ6qB3CCcdVZWq91EvDJ5cajMZkBItOy4Fvq3YLi5tOazwLXgM7q6ZB61HcNoKBxf1hMW1KLFEfPNwWKHmOHNdMU3OSwK32Ov0lfVamvjpo88CuGxbqQYGQ-Oxgg4kiQNu_AjFeEupwVa5BgnwgvWRESbz"
              />
              <span  className="text-sm">Sign In with Google</span>
            </button> */}
          </form>
          <div  className="mt-12 text-center text-xs text-neutral-500">
            {mode === "sign-up" ? "حسابی دارید ؟" : "حساب ندارید?"}
            <Link href={mode ==="sign-up" ? "/sign-in" : "sign-up"}>
              <label
                 className="text-primary font-bold cursor-pointer hover:underline mr-1"
                for="tab-register"
              >
                {mode === "sign-up" ? "واردشوید" : "ثبت نام کنید"}
              </label>
            </Link>
          </div>
        </div>
      </div>
      <div  className="hidden lg:block lg:w-1/2 relative bg-neutral-100  overflow-hidden h-full order-1">
        <Img
          alt="Shopping Experience"
          className="inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMW5cxuaiq4pQBobsY4Oo7Ez2ODSjXlE1GAY_G8xoAJiqlMnz1meL9FQ7r4nr9SFwebd4m7UV5-IXqT-UVnXvI8VCLJde6pgkqB29XxCAbOSF4eJoRn_mEypL9l0wAdUXai8b02YLVdfkETL-rpx5p9qQtOq4VQRcVz27aKzNkq1HWEyzOec2SNo8VHVESXDmqlLeFun68wGze1aFrdKa_1bhN9vehMwuZabn0WaAInNGRKID_b923QnCn57VarsrlNlTSg2Xva97u"
        />
      </div>
    </div>
  );
}
