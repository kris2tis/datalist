import PageTitle from "../../../../../features/admin/components/page-title";

export default function CategoryManagementPage({ children }) {
  return (
    <div className="flex flex-col flex-1 min-w-0">
      <main className="flex-1 overflow-y-auto p-4 lg:p-10 flex flex-col gap-8">
        <PageTitle
          title="مدیریت دسته‌بندی‌ها"
          subtitle="ساخت دسته بندی برای محصولات"
          breadcrumbs={[
            { label: "داشبورد", href: "/admin" },
            { label: "دسته بندی", href: "/admin/category" },
            { label: "ساخت دسته بندی", current: true },
          ]}
        />

        <div className="xl:col-span-4 flex flex-col gap-6">{children}</div>
      </main>
    </div>
  );
}
