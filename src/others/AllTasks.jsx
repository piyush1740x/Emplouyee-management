import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTasks = () => {
    const AuthData = useContext(AuthContext)
  return (
    <div id='all-list' className='h-auto w-full bg-[#2C2C2E] p-6 box-border rounded-lg shadow-lg'>
        <div className='flex justify-between items-center border-b bg-purple-400 text-center p-4 border-gray-700 pb-4 mb-4'>
            <h1 className='text-sm font-bold text-gray-300'>Employee Name</h1>
            <h2 className='text-sm font-bold text-gray-300'>New Task</h2>
            <h3 className='text-sm font-bold text-gray-300'>Active Task</h3>
            <h3 className='text-sm font-bold text-gray-300'>Completed</h3>
            <h3 className='text-sm font-bold text-gray-300 ml-2'>Failed</h3>
        </div>
        
      <div className='h-52 overflow-auto border rounded space-y-4'>
      {AuthData.employees.map((elem,idx) => {
            return (
                <div key={idx} className='bg-[#3A3A3C] border flex justify-between items-center p-4 rounded-lg hover:bg-[#4A4A4C] transition-colors'>
                    <h1 className='text-gray-100 text-lg font-bold '>{elem.firstName}</h1>
                    <h1 className='text-gray-300 text-lg font-bold'>{elem.taskNumber.new_task}</h1>
                    <h2 className='text-blue-400 text-lg font-bold'>{elem.taskNumber.active}</h2>
                    <h3 className='text-green-400 text-lg font-bold'>{elem.taskNumber.completed}</h3> 
                    <h3 className='text-red-400 text-lg font-bold'>{elem.taskNumber.failed}</h3> 
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default AllTasks
