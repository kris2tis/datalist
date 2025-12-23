"use client";

import { authClient } from "../../../../lib/auth-client";
import { http } from "../../../httpServices";
import { toast } from "sonner";

export default function FooterBar({ data }) {
  const { data: sessionData } = authClient.useSession();

  const cartId = data.cartId;
  const productId = data.productId;

  const addToCart = async () => {
    try {
      const { message } = await http
        .post("/user/cart", { productId, cartId })
        .then(({ data }) => data);
      toast.success(message);
    } catch (error) {
      console.log(error?.response);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="fixed bottom-20 left-0 right-0 border-t bg-surface-light dark:bg-surface-dark p-4">
      <button
        onClick={() => {
          if (sessionData) {
            addToCart();
          } else {
            toast.error("ابتدا باید وارد سایت شوید");
          }
        }}
        className="w-full rounded-xl bg-primary py-3 font-bold text-white"
      >
        افزودن به صبد
      </button>
    </div>
  );
}
