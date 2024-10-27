import React, { useState } from "react";

const CreatTask = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  const [taskTitle, settaskTitle] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [assignto, setassignto] = useState("");
  const [category, setcategory] = useState("");
  const [NewTask, setNewTask] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const task = {
      taskDate,
      taskTitle,
      taskDescription,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
    setNewTask(task);

    const data = JSON.parse(localStorage.getItem("employees"));
    data.forEach((elem) => {
      if (assignto === elem.firstName) {
        elem.tasks.push(task);
        console.log("Task assigned to:", elem.firstName);
        console.log(elem);
        elem.taskNumber.new_task 
      }
    });
    
    localStorage.setItem("employees", JSON.stringify(data));


    settaskTitle("");
    settaskDate("");
    settaskDescription("");
    setassignto("");
    setcategory("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#2C2C2E] p-4 sm:p-8">
      <div className="flex flex-col items-center w-full max-w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl bg-gray-900 p-6 sm:p-8 rounded-lg shadow-2xl">
        <button
          className="bg-red-500 text-white py-2 px-6 rounded mb-4 sm:mb-6 hover:bg-red-600 transition-colors duration-300 self-end"
          onClick={logOutUser}
        >
          Log Out
        </button>
        <form
          onSubmit={submitHandler}
          className="w-full bg-gray-800 p-4 sm:p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-green-400 font-bold text-3xl sm:text-4xl mb-4 sm:mb-6 text-center">
            Admin
          </h1>

          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-300 mb-2">Task Title</label>
            <input
              type="text"
              className="w-full p-2 sm:p-3 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Make a UI design"
              value={taskTitle}
              onChange={(e) => settaskTitle(e.target.value)}
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-300 mb-2">Date</label>
            <input
              type="date"
              className="w-full p-2 sm:p-3 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={taskDate}
              onChange={(e) => settaskDate(e.target.value)}
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-300 mb-2">Assign to</label>
            <input
              type="text"
              className="w-full p-2 sm:p-3 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="employee name"
              value={assignto}
              onChange={(e) => setassignto(e.target.value)}
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-300 mb-2">Category</label>
            <input
              type="text"
              className="w-full p-2 sm:p-3 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="design, dev, etc"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-300 mb-2">Description</label>
            <textarea
              className="w-full p-2 sm:p-3 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter task description"
              rows="4"
              value={taskDescription}
              onChange={(e) => settaskDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-gray-100 p-2 sm:p-3 rounded hover:bg-green-600 transition-colors duration-300"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatTask;
