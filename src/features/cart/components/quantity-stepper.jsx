"use client";
import { useRouter } from "next/navigation";
import { http } from "../../../httpServices";
import Image from "next/image";
import { toast } from "sonner";
import Img from "@/shared/components/ui/img";

export default function QuantityStepper({ data }) {
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
      toast.error(errorMessage);
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
    <div className="flex items-center bg-neutral-50  border border-neutral-200  rounded-xl p-1 w-full sm:w-auto justify-between sm:justify-start">
      <button
        onClick={addProductFromCart}
        className="w-9 h-9 flex items-center justify-center bg-white rounded-lg text-primary shadow-sm hover:bg-neutral-50  transition-colors"
      >
        <Img src={"/icons/plus.svg"} alt={"plus icon"} className={"h-5 aspect-square"} />
      </button>
      <input
        className="w-10 bg-transparent border-none text-center font-bold text-neutral-800  text-sm focus:ring-0 p-0"
        readonly=""
        type="text"
        defaultValue={data.quantity}
      />
      <button
        onClick={removeProductFromCart}
        className="w-9 h-9 flex items-center justify-center bg-white  rounded-lg text-neutral-400 hover:text-red-500 shadow-sm hover:bg-red-50  transition-colors"
      >
        <Img
          src={"/icons/minus.svg"}
          alt={"minus icon"}
          className={"h-5 aspect-square"}
        />
      </button>
    </div>
  );
}
