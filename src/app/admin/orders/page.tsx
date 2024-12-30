import { DatePickerWithRange } from "@/components/date-range-picker";
import OrdersTabs from "@/components/orders-tabs";

export default function Settings() {
  return (
    <main className="flex h-full w-full flex-col gap-4 p-4 pt-0">
      {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}

      <div className="w-full flex flex-col gap-2 md:flex-row justify-between items-center p-2 bg-muted/50 rounded-xl">
        <OrdersTabs />
        <DatePickerWithRange />
      </div>

      <div className="w-full h-full bg-muted/50 rounded-xl"></div>
    </main>
  );
}
