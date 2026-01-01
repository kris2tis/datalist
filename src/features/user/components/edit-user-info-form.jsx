"use client";
import Img from "@/shared/components/ui/img";
import { http } from "../../../httpServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as zod from "zod";

const updateProfileSchema = zod.object({
  name: zod
    .string("نام الزامی است")
    .min(5, "نام نمیتواند کمتر از 5 کاراکتر باشد"),
  email: zod.email("ایمیل معتبر نیست"),
});

export default function EditUserInfoForm({ data }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateProfileSchema),
    mode: "all",
    defaultValues: data,
  });

  const updateProfile = async (e) => {
    const body = { id: data.id };

    for (const key in e) {
      if (["name", "email"].includes(key)) {
        body[key] = e[key];
      }
    }

    try {
      const message = await http.put("/user", body).then(({ data }) => data);
      toast.success(message);
    } catch (error) {
      toast.error("خطا");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(updateProfile)}
       className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div  className="flex flex-col gap-2">
        <label  className="text-sm font-bold text-text-main ">نام</label>
        <input
          {...register("name")}
           className="w-full h-12 rounded-lg border border-border-light  bg-background-light px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
          type="text"
          name="name"
        />
      </div>

      <div  className="flex flex-col gap-2">
        <label  className="text-sm font-bold text-text-main">ایمیل</label>
        <input
          {...register("email")}
           className="w-full h-12 rounded-lg border border-border-light  bg-background-light px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
          type="email"
          name="email"
        />
      </div>
      <div  className="md:col-span-2 pt-4 flex items-center justify-end gap-3">
        <button
           className=" px-8 h-12 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold shadow-lg shadow-primary/30 transition-all flex items-center gap-2"
          type="submit"
        >
          <Img src={"/icons/save.svg"} alt={"save icon"} className={"h-5 aspect-square"} />
          ذخیره تغییرات
        </button>
      </div>
    </form>
  );
}
