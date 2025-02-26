import React from "react";
import Card from "app/components/ui/card";

function page() {
  return (
    <div className="bg-slate-100 w-full ">
      <div>
        <div className="flex flex-row flex-wrap items-center justify-between pt-10 lg:px-10">
          <h2 className="text-3xl font-bold">All Notes</h2>
          <div className="flex flex-row gap-10">
            <button className="bg-purple-200 px-8 py-2 text-purple-600 w rounded-md">
              <div className="flex flex-row items-center  justify-center gap-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                </span>
                <span>Share Brain</span>
              </div>
            </button>
            <button className="bg-purple-800 px-7 py-2 text-white rounded-md">
              <div className="flex flex-row items-center  justify-center gap-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
                <span>Add Content</span>
              </div>
            </button>
          </div>
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
