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
  const paymentHandler = async () => {
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
  return (
    <div
      onClick={paymentHandler}
      class="fixed bg-background-dark lg:bg-none p-4 lg:p-0 bottom-20 left-0 right-0 lg:static mt-4  

           mx-auto w-full z-40 backdrop-blur-lg  "
    >
      <div class="flex flex-col gap-3">
        <button
          class="group w-full bg-primary hover:bg-blue-700 text-white font-bold 
                       py-3.5 px-4 rounded-xl shadow-lg shadow-blue-500/30 
                       flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <span class="text-base">تکمیل خرید</span>
          <div className="relative h-5 aspect-square">
            <Image
              src={"/icons/long-arrow.svg"}
              fill
              className="rotate-270"
              alt="arrow icon"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
