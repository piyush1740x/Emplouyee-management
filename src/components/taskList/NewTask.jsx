import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 flex-nowrap w-full max-w-[300px] h-full bg-blue-500 rounded p-5 text-center ">
      <div className="flex justify-between w-full items-center h-[20%] ">
        <h1 className="bg-blue-400 font-bold text-xl px-4 py-2 rounded ">
          {data.category}
        </h1>
        <h4 className="text-lg">{data.date}</h4>
      </div>
      <h1 className="mt-5 text-xl mb-3 font-bold ">{data.title}</h1>
      <h2 className="text-sm text-zinc-300">{data.description}</h2>
      <div>
        <button>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
