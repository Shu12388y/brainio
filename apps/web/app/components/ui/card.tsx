import React from "react";

function Card() {
  return (
    <div className="bg-white rounded-md w-[25rem] h-[20rem] p-10 ">
      <div>
        <div className="flex flex-row w-full items-center justify-between p-1 ">
          <h3 className="text-lg font-semibold">Project Idea</h3>
          <div className="flex flex-row items-center justify-center gap-7">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet id
            fuga quia molestiae, accusantium voluptates neque nihil odio
            corporis cum dolorem placeat doloribus voluptatum et sunt laborum
            eum similique amet.
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-center gap-2 ">
          <span className="bg-purple-100 text-purple-700 px-[0.3rem] py-[0.1rem] rounded-2xl">
            #productivity
          </span>
          <span className="bg-purple-100 text-purple-700 px-[0.3rem] py-[0.1rem] rounded-2xl">
            #idea
          </span>
          <span className="bg-purple-100 text-purple-700 px-[0.3rem] py-[0.1rem] rounded-2xl">
            #learning
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
