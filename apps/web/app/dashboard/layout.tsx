import React from "react";
import SideBar from "app/components/ui/sidebar";

function layout({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full">
    <div className="hidden lg:block">
    <SideBar/>
    </div>
    {children}</div>;
}

export default layout;
