"use client";

import { toast } from "sonner";
import { http } from "../../../httpServices";
import Img from "../../../shared/components/ui/img";
import { FavoritIcon } from "../../../shared/assets/icons/icons";
import Link from "next/link";

const ProductCard = ({ product, user }) => {
  const { id: productId, title, description, price, image } = product;

  const cartId = user?.cart?.id;

  const addToCart = async () => {
    try {
      const { message } = await http
        .post("/user/cart", { productId: productId })
        .then(({ data }) => data);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  // const imageUrl = `/uploads/${image.split("/")[3]}`;
  return (
    <div class="group bg-white rounded-3xl p-4 border border-transparent hover:border-primary/20 shadow-card hover:shadow-card-hover transition-all duration-300 relative flex flex-col h-full overflow-hidden">
      <div class="absolute top-6 left-4 z-40 flex flex-col gap-2 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
        <button
          class="w-8 h-8 p-1 rounded-full cursor-pointer bg-white text-text-light hover:text-primary hover:bg-primary/5 border border-neutral-100 flex items-center justify-center shadow-sm transition-colors"
          title="افزودن به علاقه‌مندی"
        >
          <FavoritIcon className="fill-black" />
        </button>
      </div>
      <Link href={`/products/${productId}`}>
        <div class="relative w-full aspect-4/3 mb-4 bg-neutral-50 rounded-2xl overflow-hidden group-hover:bg-accent-bg transition-colors duration-500">
          {/* <span class="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-md z-10 shadow-sm">
          پیشنهاد ویژه
        </span> */}
          {false ? (
            <Img
              src={image}
              alt={"product picture"}
              className={"size-20 aspect-square rounded-md flex justify-center"}
            />
          ) : (
            <div className="w-full h-full aspect-square bg-gray-500 rounded-md flex justify-center items-center">
              <span className="text-white">پوزش محصول تصویری ندارد</span>
            </div>
          )}
        </div>
      </Link>
      <div class="flex-1 flex flex-col">
        {/* Colors */}
        {/* <div class="flex gap-1.5 mb-3">
              <div class="w-4 h-4 rounded-full bg-slate-900 ring-1 ring-neutral-200 shadow-sm"></div>
              <div class="w-4 h-4 rounded-full bg-neutral-100 ring-1 ring-neutral-200 shadow-sm"></div>
              <div class="w-4 h-4 rounded-full bg-blue-800 ring-1 ring-neutral-200 shadow-sm"></div>
              <span class="text-xs text-text-light mr-1">+۲</span>
            </div> */}
        <h3 class="text-text-main font-bold leading-relaxed line-clamp-2 mb-3 h-12 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {/* Review & stars */}
        {/* <div class="flex items-center gap-2 mb-4">
              <div class="flex items-center text-yellow-400">
                <span class="material-symbols-outlined text-sm fill-current">
                  star
                </span>
              </div>
              <span class="text-xs font-bold text-text-main">۴.۶</span>
              <span class="w-1 h-1 bg-neutral-300 rounded-full"></span>
              <span class="text-xs text-text-light">از ۲۰۵ رای</span>
            </div> */}
        <div class="mt-auto pt-4 border-t border-dashed border-neutral-200 flex items-end justify-between">
          <div class="flex flex-col gap-1">
            {/* <div class="flex items-center gap-2">
                  <span class="bg-red-100 text-red-600 text-xs font-bold px-1.5 py-0.5 rounded">
                    ۳٪
                  </span>
                  <span class="text-text-light text-xs line-through decoration-red-300">
                    ۴۰,۵۰۰,۰۰۰
                  </span>
                </div> */}
            <div class="flex items-center gap-1 text-primary">
              <span class="font-black text-xl">{price.toLocaleString()}</span>
              <span class="text-xs font-bold mb-1">تومان</span>
            </div>
          </div>
          <button
            onClick={() => {
              if (!cartId) return toast.warning("ابتدا باید وارد سایت شوید");
              addToCart();
            }}
            class="w-10 h-10 cursor-pointer rounded-xl bg-primary text-white hover:bg-primary-dark flex items-center justify-center shadow-lg shadow-primary/30 transition-all active:scale-95"
          >
            <Img
              className={"h-5 aspect-square"}
              src={"/icons/addToCart.svg"}
              alt={"add to cart icon"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;