import { http } from "../../../httpServices";
import PaymentTable from "../../../features/admin/components/payment-table";
export const dynamic = "force-dynamic";
export default async function page() {
  const { paymentList } = await http
    .get(`/admin/payment`)
    .then(({ data }) => data);
  return (
    <div>
      <div class="flex flex-wrap justify-between items-end gap-4 border-b border-[#29382e] pb-6">
        <div class="flex flex-col gap-2">
          <h2 class="text-white text-3xl font-bold tracking-tight">
            مدیریت پرداخت‌ها
          </h2>
          <p class="text-[#9db8a6] text-sm">لیست کامل تراکنش‌های انجام شده</p>
        </div>
      </div>
      <PaymentTable data={paymentList} />
    </div>
  );
}
