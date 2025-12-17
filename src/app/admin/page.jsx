import PaymentTable from "../../features/admin/components/payment-table";
import { http } from "../../httpServices";
export const dynamic = "force-dynamic";

export default async function Page() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
  const { paymentList } = await http
    .get(`${baseUrl}/admin/payment`)
    .then(({ data }) => data);

  return <PaymentTable data={paymentList} />;
}
