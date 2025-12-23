import CategoryForm from "../../../../../../features/admin/category/components/category-form";
import { http } from "../../../../../../httpServices";

export default async function Page({ params }) {
  const { id } = await params;
  const data = await http
    .get(`/admin/category/edit/${id}`)
    .then(({ data }) => data);
  const { data: category } = data;
  return <CategoryForm data={category} mode={"edit"} />;
}
