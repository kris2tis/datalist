// pages/inventory/products.js (Product Management Page)
import { http } from "../../../httpServices";

import ProductPageHeader from "../../../features/admin/components/product-page-header";
import { ProductTable } from "../../../features/admin/components/product-table-row";

export default async function Page() {
  const { productList } = await http
    .get("/admin/product")
    .then(({ data }) => data);
 
    
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased min-h-screen flex flex-col">
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm">
          <a
            className="text-text-muted hover:text-white transition-colors"
            href="#"
          >
            داشبورد
          </a>
          <span className="text-text-muted">/</span>
          <span className="text-primary font-medium">محصولات</span>
        </nav>

        <ProductPageHeader />

        <ProductTable data={productList} />
      </main>
    </div>
  );
}
