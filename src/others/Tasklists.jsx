import React from "react";

export const Tasklists = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-between gap-5 p-5 bg-[#1F2937] mt-10 text-white rounded-lg">
      
      <div className="w-full sm:w-[48%] lg:w-[23%] bg-red-500 p-6 rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-white">{data.taskNumber.new_task}</h1>
        <h2 className="mt-2 text-lg font-semibold text-gray-100">New Task</h2>
      </div>

      <div className="w-full sm:w-[48%] lg:w-[23%] bg-yellow-500 p-6 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-black">{data.taskNumber.active}</h1>
        <h2 className="mt-2 text-lg font-semibold text-gray-800">Active Task</h2>
      </div>

      <div className="w-full sm:w-[48%] lg:w-[23%] bg-green-500 p-6 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-white">{data.taskNumber.completed}</h1>
        <h2 className="mt-2 text-lg font-semibold text-gray-100">Completed Task</h2>
      </div>

      <div className="w-full sm:w-[48%] lg:w-[23%] bg-purple-500 p-6 rounded-lg shadow-lg hover:bg-purple-600 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-white">{data.taskNumber.failed}</h1>
        <h2 className="mt-2 text-lg font-semibold text-gray-100">Failed Task</h2>
      </div>
      
    </div>
  );
};
