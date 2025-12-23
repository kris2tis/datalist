"use client";

import { toast } from "sonner";
import { http } from "../../../httpServices";
import Image from "next/image";
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
    <div className="grid-cols-1">
      <div className="flex flex-col  items-stretch justify-between gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-800 transition-colors duration-300">
        {/* Image Section */}
        <Link href={`/products/${productId}`}>
          <div className="h-50 lg:h-80 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative group flex justify-center items-center">
            <span className="text-white">اقا شرمنده عکس نداره</span>
            {/* <Image
              src={imageUrl}
              fill
              alt="product image"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            /> */}
          </div>
        </Link>
        {/* Content Section */}
        <div className="flex flex-1 flex-col justify-between gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-start">
              <h3 className="text-[#111318] dark:text-white text-base font-bold leading-tight line-clamp-2">
                {title}
              </h3>
              <button className="text-gray-400 hover:text-primary transition-colors">
                <HeartIcon />
              </button>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xs font-medium leading-normal line-clamp-2">
              {description ||
                "داده‌های مالی جامع برای تحلیل کسب‌وکار و پیش‌بینی روندهای آینده بازار."}
            </p>
          </div>
          <div className="flex items-center justify-between mt-1">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">قیمت بسته</span>
              <span className="text-primary font-bold text-lg font-display">
                {price.toLocaleString()}{" "}
                <span className="text-xs font-normal text-gray-500">تومان</span>
              </span>
            </div>
            <button
              onClick={() => {
                if (!cartId) return toast.warning("ابتدا باید وارد سایت شوید");
                addToCart();
              }}
              className={
                "flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 gap-2 text-sm font-medium transition-colors bg-primary hover:bg-blue-700 text-white shadow-lg shadow-primary/20"
              }
            >
              <ArrowToCartIcon />
              <span>افزودن</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

const ArrowToCartIcon = () => {
  return (
    <div className="relative h-5 aspect-square">
      <Image src={"/icons/plus.svg"} fill alt="short arrow down icon" />
    </div>
  );
};

const HeartIcon = () => {
  return (
    <div className="relative h-5 aspect-square">
      <Image src={"/icons/heart.svg"} fill alt="short arrow down icon" />
    </div>
  );
};
