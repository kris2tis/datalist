"use client";
import React from "react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { http } from "../../../../httpServices";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const createProductSchema = zod.object({
  title: zod
    .string(" عنوان دسته بندی  را پر کنید")
    .min(5, "حداقل باید 5 کارکاتر باشد"),
});

export default function CategoryForm({ mode, data }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProductSchema),
    mode: "all",
    defaultValues: mode === "edit" && data,
  });
  const { push } = useRouter();
  const handleCreateCategory = async (e) => {
    try {
      const { message } = await http
        .post("/admin/category", e)
        .then(({ data }) => data);
      toast.success(message);
      push("/admin/category");
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "خطا";
      toast.error(errorMessage);
    }
  };

  const handleEditCategory = async (e) => {
    try {
      const { message } = await http
        .post("/admin/category/edit", { ...e, categoryId: data.id })
        .then(({ data }) => data);
      toast.success(message);
      push("/admin/category");
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "خطا";
      toast.error(errorMessage);
    }
  };

  const handleSubmitForm = (e) => {
    if (!mode) return;
    mode === "create" ? handleCreateCategory(e) : handleEditCategory(e);
  };
  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="w-full flex flex-col gap-y-3"
    >
      <div className="rounded-xl border border-border-dark bg-surface-dark p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-lg font-bold">
            {mode === "create" ? "ساخت دسته بندی جدید" : "ویرایش دسته بندی"}
          </h3>
        </div>

        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="category-name"
            className="text-sm font-medium text-text-secondary"
          >
            نام دسته بندی
          </label>
          <input
            className="w-full rounded-lg bg-background-dark border border-border-dark text-white px-4 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-text-secondary/50 text-sm"
            placeholder="پیاز😀"
            type="text"
            name="title"
            {...register("title")}
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-2">
          <button
            className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-green-500 text-[#111813] font-bold py-2.5 px-4 rounded-lg transition-colors"
            type="submit"
          >
            ذخیره دسته بندی
          </button>
        </div>
      </div>
    </form>
  );
}
