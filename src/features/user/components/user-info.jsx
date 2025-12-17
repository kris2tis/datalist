"use client";
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

export default function UserInfo({ data }) {
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
      console.log(message);
      toast.success(message);
    } catch (error) {
      toast.error("خطا");
    }
  };
  return (
    <div className="flex flex-col items-center gap-y-3">
      <div className="size-20 aspect-square rounded-full bg-white"></div>

      <form
        onSubmit={handleSubmit(updateProfile)}
        className="flex flex-col gap-y-2 w-full"
        action=""
      >
        <input
          {...register("name")}
          className="p-2 border rounded-md"
          type="name"
        />
        <input
          {...register("email")}
          className="p-2 border rounded-md"
          type="email"
        />
        <button className="p-2 border rounded-md">اعمال تغییرات</button>
      </form>
    </div>
  );
}
