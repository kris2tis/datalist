"use client";
import { useRouter } from "next/navigation";
import { http } from "../../../httpServices";
import Image from "next/image";
import { toast } from "sonner";

export default function QuantityStepper({ currentValue, data }) {
  const { productId, cartId } = data;
  const { refresh } = useRouter();
  const addProductFromCart = async () => {
    const data = { productId: productId, cartId: cartId };

    try {
      const { message } = await http
        .post("/user/cart", data)
        .then(({ data }) => data);

      toast.success(message);
      refresh();
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      alert(errorMessage);
    }
  };
  const removeProductFromCart = async () => {
    const data = { productId: productId, cartId: cartId };

    try {
      const { message } = await http
        .post("/user/cart/decrease", data)
        .then(({ data }) => data);

      toast.success(message);
      refresh();
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex items-center bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-lg p-0.5 h-8">
      <button
        onClick={addProductFromCart}
        className="w-7 h-full flex items-center justify-center text-primary dark:text-blue-400 
                   hover:bg-white dark:hover:bg-gray-700 rounded-md shadow-sm transition-all active:scale-95"
      >
        <div className="relative h-5 aspect-square">
          <Image src={"/icons/plus.svg"} alt="logn arrow icon" fill />
        </div>
      </button>
      <span
        className="w-8 text-center text-sm font-semibold bg-transparent border-none 
                  text-[#111318] dark:text-white p-0 focus:ring-0"
      >
        {currentValue}
      </span>

      <button
        onClick={removeProductFromCart}
        className="w-7 h-full flex items-center justify-center text-gray-400 dark:text-gray-500 
                   hover:text-red-500 hover:bg-white dark:hover:bg-gray-700 rounded-md shadow-sm transition-all active:scale-95"
      >
        <div className="relative h-5 aspect-square">
          <Image src={"/icons/minus.svg"} alt="logn arrow icon" fill />
        </div>
      </button>
    </div>
  );
}
