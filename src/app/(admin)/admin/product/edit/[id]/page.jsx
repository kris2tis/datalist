import ProductForm from "../../../../../../features/admin/components/product-form";
import { http } from "../../../../../../httpServices";

export default async function Page({ params }) {
  const { id } = await params;

  const { product } = await http
    .get(`/user/product/${id}`)
    .then(({ data }) => data);
  const categories = await http.get(`/admin/category`).then(({ data }) => data);

  const data = { ...product, productId: id, categories: categories?.data };

  return <ProductForm mode={"edit"} data={data} />;
}
