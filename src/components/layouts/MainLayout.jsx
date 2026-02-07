import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../ui/Header/Header";

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
