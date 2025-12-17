import ProductList from "../../features/admin/components/product-list";
import { http } from "../../httpServices";
import { cookies } from "next/headers";
import FilterBar from "../../features/products/components/filter-bar";

export default async function Page({ searchParams }) {
  const queries = await searchParams;

  const queriesFormated = `${
    queries?.category ? `?category=${queries.category}&` : ""
  }${queries?.sort ? `?sort=${queries.sort}&` : ""}${
    queries?.gte ? `?gte=${queries.gte}&` : ""
  }${queries?.lte ? `lte=${queries.lte}` : ""}`;

  const { productList } = await http.get(`/product${queriesFormated}`).then(({ data }) => data);
  
  const cookiesStore = await cookies();
  const userId = cookiesStore.get("id")?.value;

  const user = userId
    ? await http
        .get("/user", {
          headers: { userId: userId },
        })
        .then(({ data }) => data.user)
    : {};
 
  return (
    <div className=" dark:bg-background-dark text-[#111318]  font-display min-h-screen flex flex-col gap-y-15 overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <FilterBar />
      <ProductList data={productList} user={user} />
    </div>
  );
}
