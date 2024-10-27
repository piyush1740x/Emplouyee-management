import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FaildTask from './FaildTask';

const TaskList = ({ data }) => {
  return (
    <div id='tasklist' className='w-full h-auto  relative bg-[#2D3748] p-5 mt-10 rounded-lg shadow-lg'>
      <h2 className="text-2xl font-bold text-white mb-5">Task List</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 overflow-auto lg:grid-cols-3 gap-5 h-[40vh]'>
        {data.tasks.map((elem, idx) => {
          let TaskComponent = null;

          if (elem.active) {
            TaskComponent = AcceptTask;
          } else if (elem.new_task) {
            TaskComponent = NewTask;
          } else if (elem.completed) {
            TaskComponent = CompleteTask;
          } else if (elem.failed) {
            TaskComponent = FaildTask;
          }

          return TaskComponent ? (
            <div key={idx} className='bg-white rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-105'>
              <TaskComponent data={elem} />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default TaskList;
