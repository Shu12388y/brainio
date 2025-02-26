import React from "react";

function page() {
  return (
    <div className="bg-slate-100 w-full flex flex-col px-8">
      <div>
        <div className="py-10">
          <h1 className="text-3xl font-bold">Create New Second Brain</h1>
        </div>
        <div>
          <div className="flex flex-col">
            <label htmlFor="">Catgory</label>
            <select name="" id="">
              <option value="">Choose option</option>
              <option value="tweet">Tweets</option>
              <option value="video">Video</option>
              <option value="document">Document</option>
              <option value="link">Link</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Enter Title</label>
            <input type="text" name="" id="" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Content</label>
            <input type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Link</label>
            <input type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Tags</label>
            <select name="" id="">
              <option value="">Choose option</option>
              <option value="">Productivity</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
