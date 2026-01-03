import { http } from "../../../httpServices";

import { CartItemCard } from "../../../features/cart/components/cart-card";
import { TopBar } from "../../../features/cart/components/top-bar";
import OrderSummary from "../../../features/cart/components/order-summary";

export const metadata = {
  title: "سبد خرید",
};

import Link from "next/link";
import { headers } from "next/headers";

export default async function page() {
  const user = await http
    .get(`/user/cart`, {
      headers: await headers(),
      withCredentials: true,
    })
    .then(({ data }) => data.user);
  const cartList = user?.cart?.productItems;

  if (!cartList?.length)
    return (
      <div className="flex justify-center items-center py-5">
        <div className="flex flex-col gap-y-2">
          <span className="font-light">محصولی در سبد وجود ندارد</span>
          <Link className="font-bold" href={"/products"}>
            فروشگاه
          </Link>
        </div>
      </div>
    );
  return (
    <div className="grow mx-auto px-4 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        <div className="lg:col-span-8 space-y-4">
          <TopBar itemCount={cartList?.length || 0} />

          {cartList.map((c) => (
            <CartItemCard key={c.id} data={c} />
          ))}
        </div>
        <OrderSummary data={user} />
      </div>
    </div>
  );
}


