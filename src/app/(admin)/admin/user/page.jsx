import { http } from "../../../../httpServices";
import { UserTable } from "../../../../features/admin/components/user-table";

export const dynamic = "force-dynamic";
export default async function Page() {
  const user = await http.get("/admin/user").then(({ data }) => data);
  const { data } = user || [];
  return <UserTable data={data} />;
}
