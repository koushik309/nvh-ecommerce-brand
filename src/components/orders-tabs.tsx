import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function OrdersTabs() {
  return (
    <Tabs defaultValue="all-orders">
      <TabsList>
        <TabsTrigger value="all-orders">All Orders</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="shipped">Shipped</TabsTrigger>
        <TabsTrigger value="canceled">Canceled</TabsTrigger>
      </TabsList>
      {/* <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent> */}
    </Tabs>
  );
}
