import React from "react";
import Card from "app/components/ui/card";

function page() {
  return (
    <div className="bg-slate-100 w-full">
      <div>
        <div className="flex flex-row items-center justify-between pt-10 px-10">
          <h2 className="text-3xl font-bold">All Links</h2>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center px-2 lg:px-10 pt-10 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
