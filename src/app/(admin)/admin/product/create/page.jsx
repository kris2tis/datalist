import { http } from "../../../../../httpServices";
import ProductForm from "../../../../../features/admin/components/product-form";

export default async function Page() {
  const categories = await http.get(`/admin/category`).then(({ data }) => data);
  console.log(categories);
  return (
    <ProductForm
      mode={"create"}
      data={{ categories: categories?.data || [] }}
    />
  );
}
