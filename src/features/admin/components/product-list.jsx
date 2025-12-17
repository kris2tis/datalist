"use client";
import ProductCard from "../../../features/products/components/product-card";

export default function ProductList({ data, user }) {
  if (!data?.length) {
    return <span>محصولی وجود ندارد</span>;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 px-4 pb-24 pt-2  gap-4 z-10">
      {data.map((p) => (
        <ProductCard key={p.id} product={p} user={user} />
      ))}
    </div>
  );
}

