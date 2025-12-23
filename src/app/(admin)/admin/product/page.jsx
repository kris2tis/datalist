import { http } from "../../../../httpServices";

import { ProductTable } from "../../../../features/admin/components/product-table-row";
import Link from "next/link";
import AdminPageHeader from "../../../../shared/components/layout/admin/admin-page-header";
export const dynamic = "force-dynamic";

export default async function Page() {
  const { productList } = await http
    .get(`/admin/product`)
    .then(({ data }) => data);
  return (
   
      <main className="flex-1 w-full flex flex-col gap-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm">
          <Link
            className="text-text-muted hover:text-white transition-colors"
            href="/admin"
          >
            داشبورد
          </Link>
          <span className="text-text-muted">/</span>
          <span className="text-primary font-medium">محصولات</span>
        </nav>

        <AdminPageHeader
          title={"محصولات"}
          desctiption={"مدیریت کامل محصولات"}
          path={"product"}
          href="/admin/product/create"
        />

        <ProductTable data={productList} />
      </main>
 
  );
}
