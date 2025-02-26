import React from "react";
import Card from "app/components/ui/card";

function page() {
  return (
    <div className="bg-slate-100 w-full">
      <div>
        <div className="flex flex-row items-center justify-between pt-10 px-10">
          <h2 className="text-3xl font-bold">All Videos</h2>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 items-center justify-center px-10 pt-10 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default page;
