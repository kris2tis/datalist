"use client";

import { toast } from "sonner";
import { http } from "../../../httpServices";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DeleteCartItem({ data }) {
  const { productId, cartId } = data;
  const { refresh } = useRouter();
  const deleteCartItemFromCart = async () => {
    const data = { productId: productId, cartId: cartId };
   
    try {
      const { message } = await http
        .post("/user/cart/delete", data)
        .then(({ data }) => data);

      toast.success(message);
      refresh();
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      console.log(error)
      toast.error(errorMessage);
    }
  };
  return (
    <div
      onClick={deleteCartItemFromCart}
      className="relative h-5 aspect-square"
    >
      <Image src={"/icons/delete.svg"} alt="logn arrow icon" fill />
    </div>
  );
}
