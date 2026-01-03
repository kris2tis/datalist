import ProductList from "../../../features/admin/components/product-list";
import { http } from "../../../httpServices";
import FilterBar from "../../../features/products/components/filter-bar";
import { SortBar } from "../../../features/products/components/sort-bar";
import { Suspense } from "react";
import { auth } from "../../../../lib/auth";
import { headers } from "next/headers";

export const metadata = {
  title: "محصولات",
};

export default async function Page({ searchParams }) {
  const params = await searchParams;

  // Formatting search parameters
  const searchFormated = `${
    params?.category ? `?category=${params.category}&` : ""
  }${params?.sort ? `?sort=${params.sort}&` : ""}${
    params?.gte ? `?gte=${params.gte}&` : ""
  }${params?.lte ? `lte=${params.lte}` : ""}`;

  const productList = await http
    .get(`/user/product${searchFormated}`)
    .then(({ data }) => data.data);

  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <div className="mx-auto px-4 lg:px-8 py-8 grow">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <FilterBar />
        <div className="flex-1 w-full">
          <SortBar />
          <Suspense fallback={<span>درحال گرفتن اطلاعات</span>}>
            <ProductList data={productList} user={session?.user || {}} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
