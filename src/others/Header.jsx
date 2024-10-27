import React from 'react'

const Header = (props) => {
  
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "")
    // window.location.reload()
    props.changeUser("")
  }

  return (
    <div className='flex justify-between items-center p-6 bg-gray-900 text-white'>
      <div>
        <h1 className='text-xl sm:text-2xl'>Hello,<br />
          <span className='font-bold text-2xl sm:text-3xl text-green-400'>
            {props.data.firstName} 👋🏻
          </span>
        </h1>
      </div>

      <div>
        <button 
          className='bg-red-600 py-2 px-5 text-lg font-semibold rounded hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500'
          onClick={logOutUser}
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Header
