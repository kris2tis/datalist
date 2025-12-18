"use client";
import React, { useEffect, useState } from "react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { http } from "../../../httpServices";
import { uploadFile } from "../../../action/file";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const createProductSchema = zod.object({
  title: zod.string("تایتل صروری است").min(5, "حداقل باید 5 کارکاتر باشد"),
  price: zod.preprocess((val) => {
    if (typeof val === "string") {
      return Number.parseInt(val);
    }
    return val;
  }, zod.number("قیمت ضروری است")),
  categoryId: zod.preprocess((val) => {
    if (typeof val === "string") {
      return Number.parseInt(val);
    }
    return val;
  }, zod.number("دسته بندی ضروری است")),

  quantity: zod.preprocess((val) => {
    if (typeof val === "string") {
      return Number.parseInt(val);
    }
    return val;
  }, zod.number("تعداد ضروری است").min(1, "تعداد حداقل باید 1 باشد")),
  properties: zod
    .array(
      zod.object({
        name: zod.string().min(1),
        value: zod.string().min(1),
      })
    )
    .min(2, "ویژگی کمتر از 2 تا نمیشود"),
});

//  image: zod
//     .file("لطفا یک عکس انتخاب کنید")
//     .max(524288, "حدااکثر حجم فایل باید نیم مگابایت باشد")
//     .mime(["image/png", "image/jpeg"], "فرمت عکس باید jpg | png باشد"),

export default function Page() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(createProductSchema), mode: "all" });

  const [isloading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const { push } = useRouter();
  const handleCreateProduct = async (e) => {
    // const image = await uploadFile(e.image);
    // const data = { ...e };
    try {
      setIsLoading(true);
      const { message } = await http
        .post("/product", e)
        .then(({ data }) => data);
      toast.success(message);
      setIsLoading(false);
      push("/admin/products");
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "خطا";
      
      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 overflow-y-hidden p-6 lg:p-10">
      <div className="mx-auto w-full ">
        <form onSubmit={handleSubmit(handleCreateProduct)}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight mb-2">
                افزودن محصول جدید
              </h2>
              <p className="text-text-muted text-sm">
                اطلاعات محصول را وارد کنید و آن را برای فروش منتشر کنید.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => push("/admin/products")}
                className="px-5 py-2.5 rounded-lg border border-surface-border text-white hover:bg-surface-border font-medium text-sm transition-colors"
              >
                انصراف
              </button>
              <button className="px-5 py-2.5 rounded-lg bg-primary hover:bg-green-500 text-white font-bold text-sm shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                انتشار محصول
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <GeneralInfoCard register={register} />
              <Property control={control} />
            </div>

            <div className="lg:col-span-1 flex flex-col gap-6">
              <PricingCard register={register} />
              <InventoryCard register={register} />
              <OrganizationCard register={register} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const Property = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "properties",
  });
  const [property, setProperty] = useState({ name: null, value: null });

  const addProperty = () => {
    const findProperty = fields.find((p) => p.name === property.name);

    if (findProperty?.name) {
      return toast.error("شما یک ویژگی با این نام دارید");
    }
    append(property);
  };

  return (
    <>
      <div className="flex items-center gap-x-3 ">
        <input
          onChange={(e) =>
            setProperty((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          className="p-2 border rounded-md"
          placeholder="نام ویژگی"
          type="text"
          name="name"
        />
        <input
          onChange={(e) =>
            setProperty((prev) => ({ ...prev, value: e.target.value }))
          }
          className="p-2 border rounded-md"
          placeholder="مقدار ویژگی"
          type="text"
          name="value"
        />
        <button
          onClick={addProperty}
          type="button"
          className="p-2 border rounded-md cursor-pointer"
        >
          ساخت ویژگی محصول
        </button>
      </div>

      <div className="grid grid-cols-3 gap-x-2">
        {fields.map((p, index) => {
          const { name, value } = p;
          return (
            <div
              key={p.id}
              className="col-span-1 flex flex-col   rounded-md bg-gray-300 p-2"
            >
              <Controller
                key={index}
                render={({ field }) => (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-black/70">{name}</span>
                      <span
                        onClick={() => remove(index)}
                        className="bg-red-400 text-[10px] text-white rounded-md p-1 cursor-pointer"
                      >
                        حذف
                      </span>
                    </div>
                    <span className="text-black">{value}</span>
                  </>
                )}
                name={`property.${index}`}
                control={control}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

function ImageUploader({ register, image, setImage, setValue }) {
  return (
    <div className="w-full flex-col gap-y-3">
      {image && (
        <div className="relative size-20 aspect-square">
          <Image
            src={image}
            className="object-cover object-center"
            fill
            alt="product image sellected"
          />
        </div>
      )}

      {image && <button onClick={() => setImage(null)}>پاک کردن عکس</button>}
      {!image && (
        <input
          type="file"
          name="image"
          {...register("image", {
            onChange: (e) => {
              const imageFile = URL.createObjectURL(e.target.files[0]);
              setValue("image", e.target.files[0], {
                shouldDirty: true,
                shouldValidate: true,
              });
              setImage(imageFile);
            },
          })}
        />
      )}
    </div>
  );
}

function PublishStatusCard() {
  return (
    <div className="bg-surface-dark border border-surface-border rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-4">وضعیت انتشار</h3>
      <div className="flex flex-col gap-4">
        {/* Status Indicator */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-background-dark border border-surface-border">
          <div className="flex items-center gap-3">
            <span className="size-2.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></span>
            <span className="text-white text-sm">پیش‌نویس</span>
          </div>
          <button className="text-xs text-primary hover:text-white transition-colors">
            تغییر
          </button>
        </div>
        {/* Visibility */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-muted">قابلیت مشاهده</span>
          <span className="text-sm text-white font-medium">عمومی</span>
        </div>
        {/* Publish Time */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-muted">زمان انتشار</span>
          <span className="text-sm text-white font-medium">فوری</span>
        </div>
      </div>
    </div>
  );
}
function PricingCard({ register }) {
  return (
    <div className="bg-surface-dark border border-surface-border rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        قیمت گذاری
      </h3>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white">
            قیمت پایه (تومان)
          </label>
          <input
            {...register("price")}
            className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
            placeholder="0"
            type="text"
            dir="ltr"
            name="price"
          />
        </div>
        {/* <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white">
            قیمت فروش ویژه
          </label>
          <input
            className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
            placeholder="0"
            type="text"
            dir="ltr"
          />
        </div> */}
      </div>
    </div>
  );
}

function InventoryCard({ register }) {
  return (
    <div className="bg-surface-dark border border-surface-border rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        موجودی
      </h3>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white">تعداد موجودی</label>
          <input
            name="quantity"
            {...register("quantity")}
            className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
            placeholder="0"
            type="number"
            dir="ltr"
          />
        </div>
      </div>
    </div>
  );
}

const Tag = ({ text }) => (
  <span className="px-2 py-1 bg-surface-border rounded text-xs text-white flex items-center gap-1">
    {text}
    <button className="hover:text-red-400">
      <span className="material-symbols-outlined text-[14px]">close</span>
    </button>
  </span>
);

function OrganizationCard({ register }) {
  return (
    <div className="bg-surface-dark border border-surface-border rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        دسته‌بندی
      </h3>
      <input
        className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
        placeholder="یک عدد وارد کنید"
        type="text"
        {...register("categoryId")}
        name="categoryId"
      />
      {/* <div className="flex flex-col gap-5"> */}
      {/* <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white">دسته اصلی</label>
          <div className="relative">
            <select className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none appearance-none cursor-pointer">
              <option>انتخاب کنید...</option>
              <option>پوشاک مردانه</option>
              <option>لوازم دیجیتال</option>
              <option>کتاب و لوازم التحریر</option>
            </select>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}

function GeneralInfoCard({ register }) {
  return (
    <div className="bg-surface-dark border border-surface-border rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        اطلاعات پایه
      </h3>
      <div className="flex flex-col gap-5">
        {/* Product Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white">نام محصول</label>
          <input
            {...register("title")}
            className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
            placeholder="مثال: کفش ورزشی نایک مدل ایرمکس"
            type="text"
            name="title"
          />
        </div>
        {/* Description Editor */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white">توضیحات</label>
          <div className="bg-background-dark border border-surface-border rounded-lg overflow-hidden flex flex-col min-h-[200px]">
            {/* Simple Toolbar */}
            <div className="flex items-center gap-1 p-2 border-b border-surface-border bg-surface-border/30 overflow-x-auto"></div>
            <textarea
              {...register("content")}
              name="content"
              className="flex-1 w-full bg-transparent border-none p-4 text-white placeholder-text-muted focus:ring-0 resize-none"
              placeholder="توضیحات کامل محصول را اینجا بنویسید..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

const SampleImage = ({ src }) => (
  <div className="relative group aspect-square rounded-lg overflow-hidden border border-surface-border">
    <img
      className="w-full h-full object-cover"
      alt="پیش نمایش تصویر محصول"
      src={src}
    />
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
      <button
        className="p-1.5 bg-red-500/80 rounded hover:bg-red-600 text-white transition-colors"
        title="حذف"
      >
        <span className="material-symbols-outlined text-[18px]">delete</span>
      </button>
    </div>
  </div>
);

function MediaUploadCard() {
  return (
    <div className="bg-surface-dark border border-surface-border rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">
          imagesmode
        </span>
        تصاویر محصول
      </h3>
      {/* Drag and Drop Area */}
      <div className="border-2 border-dashed border-surface-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-background-dark/50 hover:border-primary/50 transition-all cursor-pointer group">
        <div className="size-16 bg-surface-border/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <span className="material-symbols-outlined text-3xl text-text-muted group-hover:text-primary transition-colors">
            cloud_upload
          </span>
        </div>
        <p className="text-white font-medium mb-1">
          برای آپلود کلیک کنید یا فایل را اینجا رها کنید
        </p>
        <p className="text-text-muted text-sm">PNG, JPG تا ۱۰ مگابایت</p>
      </div>

      {/* Uploaded Images Preview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        <SampleImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCjFrZGpr8jCKUjaqFePom0nq9inPnJZmgEVfesupFaUaQT7H6zPpiIgeaS09NN9VOhu8BhZ00G4no69vKlLAHNVD0m83UoA32h_e6qyry95o1Fcv0NWSUokERjna_lY1OJT8KWYYPZED-lUm1yVAXEAMZE9XgFs0m1VC4b5a2UnZEurSfVHYw--haKZuw9Tr3-3zl6udha4Udg4cC12as9wzs56Cc239DFVpbr214Utmq2_UIOBSiY5cAStSUKX1189-n_rn2fQR_" />
        <SampleImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXSnF1uAvKxhpOS9qrRvdpo2NCiuISQX_POHaR6dzg65Y10LHTWeQNURpScq6M5jSEBywjrUUFsrCFZNBARwBYOnJ_6um-UBuPAX3YPE3dvDI-aYeieDr6Og_HsALMg-L6ZJUuO3_TsKBcchtbltXwPG20Qmh2TKRy97wW2uPCidXloEDdkfUSXADnjXnrJgWswQF74jifn81LGrQW4CdSdb414ROSV-JDKEqCREKjdj_NTCYFVCqDfXoDubVzkllJy5iFZOKSVtso" />
      </div>
    </div>
  );
}

function VariantsCard() {
  return (
    <div className="bg-surface-dark border border-surface-border rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        ویژگی‌ها
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white">رنگ‌ها</label>
          <input
            className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
            placeholder="مثال: قرمز، آبی"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-white">سایزها</label>
          <input
            className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
            placeholder="مثال: XL, L, M"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}
