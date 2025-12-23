import { http } from "../../../../httpServices";
import PaymentTable from "../../../../features/admin/components/payment-table";
import AdminPageHeader from "../../../../shared/components/layout/admin/admin-page-header";
import AdminBreadcrumb from "../../../../shared/components/layout/admin/admin-breadcrumb";

export const dynamic = "force-dynamic";
export default async function page() {
  const { paymentList } = await http
    .get(`/admin/payment`)
    .then(({ data }) => data);
  return (
    <main className="flex-1 w-full flex flex-col gap-6">
      <AdminBreadcrumb paths={[{ title: "سفارشات"}]} />
      <AdminPageHeader
        title={"سفارشات"}
        desctiption={"مدیریت کامل سفارشات"}
        path={"payment"}
      />
      <PaymentTable data={paymentList} />
    </main>
  );
}
