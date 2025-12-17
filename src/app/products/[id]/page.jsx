import { http } from "../../../httpServices";
import React from "react";
import GalleryCarousel from "../../../features/product-details/component/gallery-carousel";
import ProductInfo from "../../../features/product-details/component/product-info";
import ProductDescription from "../../../features/product-details/component/product-description";
import FooterBar from "../../../features/product-details/component/footer-bar";
import { cookies } from "next/headers";

export default async function Page({ params }) {
  const { id } = await params;
  const { product } = await http.get(`/product/${id}`).then(({ data }) => data);
  const cookiesStore = await cookies();
  const userId = cookiesStore.get("id")?.value;
  if (!product?.id) {
    return <span>محصولی یافت نشد</span>;
  }
  const user = await http
    .get("/cart", {
      headers: {
        id: userId,
      },
      withCredentials: true,
    })
    .then(({ data }) => data?.user);
  const { id: productId, title, price, image, content } = product;
  const imageUrl = `/uploads/${image?.split("/")[3]}`;

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased py-3">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-24">
        <GalleryCarousel image={imageUrl} />
        <ProductInfo title={title} price={price} />
        <ProductDescription content={content} />
        <FooterBar data={{ productId: productId, cartId: user.cart.id }} />
      </div>
    </div>
  );
}
