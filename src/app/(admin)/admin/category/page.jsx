import AdminBreadcrumb from "../../../../shared/components/layout/admin/admin-breadcrumb";
import AdminPageHeader from "../../../../shared/components/layout/admin/admin-page-header";
import CategoryTable from "../../../../features/admin/category/components/category-table";
import { http } from "../../../../httpServices";

export const dynamic = "force-dynamic";
export default async function Page() {
  const data = await http.get(`/admin/category`).then(({ data }) => data);
  const { data: categories } = data;
  
  return (
    <main className="flex-1 w-full flex flex-col gap-6">
      <AdminBreadcrumb paths={[{ title: "دسته بندی ها" }]} />
      <AdminPageHeader
        title={"دسته بندی ها"}
        desctiption={"مدیریت کامل دسته بندی ها وب سایت"}
        path={"category"}
        href="/admin/category/create"
      />
      <CategoryTable data={categories || []} />
    </main>
  );
}
