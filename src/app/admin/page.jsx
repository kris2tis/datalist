import PaymentTable from "../../features/admin/components/payment-table";
import { http } from "../../httpServices";
export const dynamic = "force-dynamic";

export default async function Page() {
  const { paymentList } = await http
    .get("/admin/payment")
    .then(({ data }) => data);
    
  return <PaymentTable data={paymentList} />;
}
