"use client";

import * as React from "react";
import {
  ShoppingCart,
  Settings,
  Package,
  LayoutGrid,
  LogOut,
  Blocks,
  BellDot,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarFooter,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { LogoutConfirmationDialog } from "./dialog-logout-confirmation";

const data = {
  user: {
    name: "Nzar",
    email: "admin@nvh.com",
    avatar: "/nzar.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutGrid,
      isActive: true,
    },
    {
      title: "Orders",
      url: "/orders",
      icon: ShoppingCart,
    },
    {
      title: "Products",
      url: "/products",
      icon: Package,
    },
    {
      title: "Integrations",
      url: "/integrations",
      icon: Blocks,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: BellDot,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <LogoutConfirmationDialog>
          <SidebarMenuButton
            tooltip="Log out"
            className="hover:bg-white/10 transition-colors duration-200"
          >
            <LogOut />
            <span>Log out</span>
          </SidebarMenuButton>
        </LogoutConfirmationDialog>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
