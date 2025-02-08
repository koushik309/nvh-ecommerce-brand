import OrdersTabs from "@/components/orders-tabs";

export default function Orders() {
  return (
    <main className="flex h-full w-full flex-col gap-4 p-4 pt-0">
      <div className="w-full flex flex-col gap-2 md:flex-row justify-between items-center p-2 bg-muted/50 rounded-xl">
        <OrdersTabs />
      </div>

      <div className="w-full h-full bg-muted/50 rounded-xl"></div>
    </main>
  );
}
