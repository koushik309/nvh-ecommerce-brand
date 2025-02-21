"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Textarea } from "@/components/ui/textarea";

type StoreSettings = {
  storeName: string;
  storeUrl: string;
  supportEmail: string;
  timezone: string;
  currency: string;
  language: string;
};

type ShippingSettings = {
  freeShippingThreshold: number;
  internationalShipping: boolean;
  expressDelivery: boolean;
};

const SettingsPage = () => {
  const [storeSettings, setStoreSettings] = React.useState<StoreSettings>({
    storeName: "NVH®",
    storeUrl: "nvh.nzar.dev",
    supportEmail: "support@nvh.com",
    timezone: "UTC-5",
    currency: "USD",
    language: "English",
  });

  const [shipping, setShipping] = React.useState<ShippingSettings>({
    freeShippingThreshold: 150,
    internationalShipping: true,
    expressDelivery: true,
  });

  const handleSave = () => {
    // Simulated save functionality
    console.log("Saving settings...");
  };

  return (
    <div className="p-6 space-y-6 w-full">
      <div className="flex justify-between items-center">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your store preferences and configurations
          </p>
        </div>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>

      <Separator className="my-6" />

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid grid-cols-2 lg:grid-cols-6 w-full">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Store Information</CardTitle>
              <CardDescription>
                Update your store details and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="storeName">Store Name</Label>
                  <Input
                    disabled
                    id="storeName"
                    value={storeSettings.storeName}
                    onChange={(e) =>
                      setStoreSettings({
                        ...storeSettings,
                        storeName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="storeUrl">Store URL</Label>
                  <Input
                    disabled
                    id="storeUrl"
                    value={storeSettings.storeUrl}
                    onChange={(e) =>
                      setStoreSettings({
                        ...storeSettings,
                        storeUrl: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label>Currency</Label>
                    <Select defaultValue={storeSettings.currency}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                        <SelectItem value="GBP">GBP (£)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label>Language</Label>
                    <Select defaultValue={storeSettings.language}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem disabled value="French">
                          French
                        </SelectItem>
                        <SelectItem disabled value="German">
                          German
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>
                Add your business details for invoices and legal documents
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label>Business Address</Label>
                  <Textarea placeholder="Enter your business address" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label>Tax ID</Label>
                    <Input placeholder="Enter tax ID" />
                  </div>
                  <div className="grid gap-2">
                    <Label>Registration Number</Label>
                    <Input placeholder="Enter registration number" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipping" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Settings</CardTitle>
              <CardDescription>
                Configure your store's shipping options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Free Shipping Threshold</Label>
                  <div className="flex gap-2">
                    <Select defaultValue="USD">
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="number"
                      value={shipping.freeShippingThreshold}
                      onChange={(e) =>
                        setShipping({
                          ...shipping,
                          freeShippingThreshold: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>International Shipping</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable shipping to international addresses
                    </p>
                  </div>
                  <Switch
                    checked={shipping.internationalShipping}
                    onCheckedChange={(checked) =>
                      setShipping({
                        ...shipping,
                        internationalShipping: checked,
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Express Delivery</Label>
                    <p className="text-sm text-muted-foreground">
                      Offer express shipping options
                    </p>
                  </div>
                  <Switch
                    checked={shipping.expressDelivery}
                    onCheckedChange={(checked) =>
                      setShipping({
                        ...shipping,
                        expressDelivery: checked,
                      })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Zones</CardTitle>
              <CardDescription>
                Set up shipping rates for different regions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert>
                <AlertDescription>
                  Configure shipping zones to set different rates and rules for
                  specific regions.
                </AlertDescription>
              </Alert>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">North America</h4>
                    <p className="text-sm text-muted-foreground">
                      United States, Canada
                    </p>
                  </div>
                  <Badge>Active</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Europe</h4>
                    <p className="text-sm text-muted-foreground">
                      EU Countries
                    </p>
                  </div>
                  <Badge variant="outline">Draft</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled variant="outline" className="w-full">
                Add Shipping Zone
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
