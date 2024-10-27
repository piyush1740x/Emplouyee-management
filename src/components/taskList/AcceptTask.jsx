import React from "react";

const AcceptTask = ({data}) => {
  return (
    <div className="flex-shrink-0 flex-nowrap w-full max-w-[300px] h-full overflow-auto bg-red-500 rounded p-5 text-center ">
      <div className="flex justify-between w-full items-center h-[20%] ">
        <h1 className="bg-red-400 font-bold text-xl px-4 py-2 rounded ">{data.category}</h1>
        <h4 className="text-lg">{data.date}</h4>
      </div>
      <h1 className="mt-5 text-xl mb-3 font-bold ">{data.title}</h1>
      <h2 className="text-sm text-zinc-300">{data.description}</h2>
      <div className="flex justify-between mt-4">
        <button className="bg-green-400 px-2  py-2 text-sm rounded border-none ">Completed</button>
        <button className="bg-red-400 px-2   py-2 text-sm rounded border-none ">Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
