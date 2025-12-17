import { cookies } from "next/headers";
import { http } from "../../httpServices";
import {
  CartCard,
  CartItemCard,
} from "../../features/cart/components/cart-card";
import { TopBar } from "../../features/cart/components/top-bar";
import CouponInput from "../../features/cart/components/coupon-input";
import OrderSummary from "../../features/cart/components/order-summary";
import TrustIndicators from "../../features/cart/components/trust-indicators";
import Link from "next/link";

export default async function page() {
  const cookiesStore = await cookies();
  const id = cookiesStore.get("id").value;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
  const user = await http
    .get(`${baseUrl}/cart`, {
      headers: {
        id: id,
      },
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
    <div class="flex flex-col lg:grid-cols-6">
      <TopBar itemCount="3" />
      <div className="lg:grid lg:grid-cols-6 gap-x-2 py-2">
        <div class="lg:col-span-4 flex-1 overflow-y-auto pb-32">
          <div class="flex flex-col gap-3 py-4">
            {cartList.map((c) => (
              <CartItemCard key={c.id} data={c} />
            ))}
          </div>
        </div>
        <div class="lg:col-span-2">
          <CouponInput />

          <OrderSummary data={user} />
        </div>
      </div>
      <TrustIndicators />
    </div>
  );
}
