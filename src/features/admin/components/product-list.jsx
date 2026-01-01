import { headers } from "next/headers";
import { auth } from "../../../../lib/auth";
import ProductCard from "../../../features/products/components/product-card";

export default async function ProductList({ data , user }) {
  if (!data?.length) {
    return <span>محصولی وجود ندارد</span>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((p) => (
        <ProductCard key={p.id} product={p} user={user} />
      ))}
    </div>
  );
}
