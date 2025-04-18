"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";
import StoreProvider, { useAppSelector } from "./redux";
import AuthProvider from "./authProvider";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const IsDarkMode = useAppSelector((state) => state.global.isDarkMode);
  useEffect(() => {
    if (IsDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/*sidebar */}
      <Sidebar />
      <main
        className={`bg-gray-20 dark:bg-dark-bg flex w-full flex-col ${isSidebarCollapsed ? "" : " md:pl-64"}`}
      >
        {/*Navbar */}
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <AuthProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </AuthProvider>
    </StoreProvider>
  );
};
export default DashboardWrapper;
