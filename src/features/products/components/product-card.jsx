"use client";

import { toast } from "sonner";
import { http } from "../../../httpServices";
import Img from "../../../shared/components/ui/img";
import { FavoritIcon } from "../../../shared/assets/icons/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductCard = ({ product, user }) => {
  console.log(product)
  const { id: productId, title, description, price, image } = product;
  const cartId = user?.cart?.id;
  const { refresh } = useRouter();

  const addToCartHandler = async () => {
    try {
      const { message } = await http
        .post("/user/cart", { productId: productId })
        .then(({ data }) => data);
      toast.success(message);
      refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const addToBookmarkHandler = async () => {
    if (!cartId) return toast.warning("ابتدا باید وارد سایت شوید");

    try {
      const { message } = await http
        .post("/user/bookmark", { productId: productId })
        .then(({ data }) => data);
      toast.success(message);
      refresh();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  // const imageUrl = `/uploads/${image.split("/")[3]}`;
  return (
    <div  className="group bg-white rounded-3xl p-4 border border-transparent hover:border-primary/20 shadow-card hover:shadow-card-hover transition-all duration-300 relative flex flex-col h-full overflow-hidden">
      <div  className="absolute top-6 left-4 z-40 flex flex-col gap-2 transition-all duration-300 translate-x-2 group-hover:left-3">
        <button
           className="w-8 h-8 p-1 rounded-full cursor-pointer bg-white flex hover:scale-110  items-center justify-center shadow-sm transition-all duration-200"
          onClick={addToBookmarkHandler}
        >
          <FavoritIcon className="fill-black " />
        </button>
      </div>
      <Link href={`/products/${productId}`}>
        <div  className="relative w-full aspect-4/3 mb-4 bg-neutral-50 rounded-2xl overflow-hidden group-hover:bg-accent-bg transition-colors duration-500">
          {/* <span  className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-md z-10 shadow-sm">
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
      <div  className="flex-1 flex flex-col">
        {/* Colors */}
        {/* <div  className="flex gap-1.5 mb-3">
              <div  className="w-4 h-4 rounded-full bg-slate-900 ring-1 ring-neutral-200 shadow-sm"></div>
              <div  className="w-4 h-4 rounded-full bg-neutral-100 ring-1 ring-neutral-200 shadow-sm"></div>
              <div  className="w-4 h-4 rounded-full bg-blue-800 ring-1 ring-neutral-200 shadow-sm"></div>
              <span  className="text-xs text-text-light mr-1">+۲</span>
            </div> */}
        <h3  className="text-text-main font-bold leading-relaxed line-clamp-2 mb-3 h-12 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {/* Review & stars */}
        {/* <div  className="flex items-center gap-2 mb-4">
              <div  className="flex items-center text-yellow-400">
                <span  className="material-symbols-outlined text-sm fill-current">
                  star
                </span>
              </div>
              <span  className="text-xs font-bold text-text-main">۴.۶</span>
              <span  className="w-1 h-1 bg-neutral-300 rounded-full"></span>
              <span  className="text-xs text-text-light">از ۲۰۵ رای</span>
            </div> */}
        <div  className="mt-auto pt-4 border-t border-dashed border-neutral-200 flex items-end justify-between">
          <div  className="flex flex-col gap-1">
            {/* <div  className="flex items-center gap-2">
                  <span  className="bg-red-100 text-red-600 text-xs font-bold px-1.5 py-0.5 rounded">
                    ۳٪
                  </span>
                  <span  className="text-text-light text-xs line-through decoration-red-300">
                    ۴۰,۵۰۰,۰۰۰
                  </span>
                </div> */}
            <div  className="flex items-center gap-1 text-primary">
              <span  className="font-black text-xl">{price.toLocaleString()}</span>
              <span  className="text-xs font-bold mb-1">تومان</span>
            </div>
          </div>
          <button
            onClick={() => {
              if (!cartId) return toast.warning("ابتدا باید وارد سایت شوید");
              addToCartHandler();
            }}
             className="w-10 h-10 cursor-pointer rounded-xl bg-primary text-white hover:bg-primary-dark flex items-center justify-center shadow-lg shadow-primary/30 transition-all active:scale-95"
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
