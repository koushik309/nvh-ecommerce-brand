import { DataTable } from "@/components/dashboard-orders/data-table";
import { columns } from "@/components/dashboard-orders/columns";
import { order } from "@/lib/orders";

export default function Orders() {
  return <DataTable data={order} columns={columns} />;
}
