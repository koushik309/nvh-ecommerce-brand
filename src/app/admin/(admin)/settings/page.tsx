"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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

import { Textarea } from "@/components/ui/textarea";

type StoreSettings = {
  storeName: string;
  storeUrl: string;
  supportEmail: string;
  timezone: string;
  currency: string;
  language: string;
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
      </Tabs>
    </div>
  );
};

export default SettingsPage;
