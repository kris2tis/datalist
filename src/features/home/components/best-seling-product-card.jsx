"use client";
import Img from "@/shared/components/ui/img";
import { StarIcon } from "@/shared/assets/icons/icons";
import { useRouter } from "next/navigation";
import { http } from "@/httpServices";
import { toast } from "sonner";
import Link from "next/link";

export default function BestSelingCard({ id: productId, title, price }) {
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
  return (
    <div className="group relative">
      <div className="relative w-full aspect-square  bg-gray-50 rounded-2xl mb-4 overflow-hidden p-6 border border-gray-100 group-hover:border-blue-200 transition-colors">
        <Link href={"/products"}>
          {false && (
            <Img
              alt="Product image"
              className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              src={`imgsrc`}
            />
          )}
        </Link>
        <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button
            onClick={addToCartHandler}
            className=" cursor-pointer bg-gray-900 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-black text-sm font-bold flex items-center gap-2"
          >
            <Img
              src={"/icons/addToCart.svg"}
              alt={"add to cart icon"}
              className={"h-5 aspect-square"}
            />
            افزودن به سبد
          </button>
        </div>
      </div>

      <div className="space-y-1 text-right">
        <div className="flex items-center gap-1 text-yellow-500 mb-1">
          <StarIcon />
          <span className="text-xs font-bold text-gray-600">4.5</span>
        </div>
        <h4 className="text-sm font-bold text-gray-800 leading-tight line-clamp-2 h-10 group-hover:text-blue-600 transition-colors">
          {title}
        </h4>
        <div className="pt-2">
          <div className="text-gray-900 font-black text-lg">
            {price.toLocaleString()}
            <span className="text-xs font-normal text-gray-500">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}
