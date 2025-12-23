import InventoryTable from "../../../../features/admin/components/inventory-table";
import { http } from "../../../../httpServices";
import React from "react";

export const dynamic = "force-dynamic";
export default async function Page() {
  const res = await http.get("/admin/Inventory").then(({ data }) => data);
  const { data } = res || {};
  return <InventoryTable data={data || []} />;
}
