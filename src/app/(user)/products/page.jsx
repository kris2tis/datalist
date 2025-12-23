import ProductList from "../../../features/admin/components/product-list";
import { http } from "../../../httpServices";
import {  headers } from "next/headers";
import FilterBar from "../../../features/products/components/filter-bar";
import { auth } from "../../../../lib/auth";

export const dynamic = "force-dynamic";
export default async function Page({ searchParams }) {
  const params = await searchParams;

  // Formatting search parameters
  const searchFormated = `${
    params?.category ? `?category=${params.category}&` : ""
  }${params?.sort ? `?sort=${params.sort}&` : ""}${
    params?.gte ? `?gte=${params.gte}&` : ""
  }${params?.lte ? `lte=${params.lte}` : ""}`;

  const { productList } = await http
    .get(`/user/product${searchFormated}`)
    .then(({ data }) => data);

  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <div className=" dark:bg-background-dark text-[#111318]  font-display min-h-screen flex flex-col gap-y-15 overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <FilterBar />
      <ProductList data={productList} user={session?.user || {}} />
    </div>
  );
}
