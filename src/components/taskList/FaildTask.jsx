import React from "react";

const FaildTask = ({data}) => {
  return (
    <div className="flex-shrink-0 flex-nowrap w-full max-w-[300px] h-full bg-green-500 rounded p-5 text-center ">
      <div className="flex justify-between w-full items-center h-[20%] ">
        <h1 className="bg-green-400 font-bold text-xl px-4 py-2 rounded ">
        {data.catrgory}
        </h1>
        <h4 className="text-lg">{data.date}</h4>
      </div>
      <h1 className="mt-5 text-xl mb-3 font-bold ">
      {data.title}
      </h1>
      <h2 className="text-sm text-zinc-300">
      {data.description}
      </h2>
      <div >
        <button>Failed Task</button>
      </div>
    </div>
  );
};

export default FaildTask;