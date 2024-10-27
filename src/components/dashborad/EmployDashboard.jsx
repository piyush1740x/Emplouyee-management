import React from 'react'
import Header from '../../Others/Header'
import { Tasklists } from '../../Others/Tasklists'
import TaskList from '../taskList/TaskList'

const employDashboard = (props) => {
  return (
    <>
    <Header changeUser={props.changeUser} data={props.data}/>
    <Tasklists data={props.data}/>
    <TaskList data={props.data}/>
    </>
    
  )
}

export default employDashboard