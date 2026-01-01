"use client";

import Image from "next/image";
import { http } from "../../../httpServices";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CheckoutCTA({ data }) {
  const { refresh } = useRouter();
  const {
    id: userId,
    cart: { id: cartId },
  } = data;
  const checkOutHandler = async () => {
    console.log("sdfsdf")
    const body = {
      userId: userId,
      cartId: cartId,
      productsId: data.cart.productItems.map((p) => p.productId),
    };
    try {
      const { message } = await http
        .post("/user/payment", body)
        .then(({ data }) => data);
      toast.success(message);
      refresh();
    } catch (error) {
      toast.error("مشکلی پیش امده");
    }
  };
  return <span onClick={checkOutHandler}>تسویه حساب</span>;
}
