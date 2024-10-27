import React from "react";
import CreatTask from "../../others/ CreatTask";
import AllTasks from "../../others/AllTasks";
const AdminDashboard = (props) => {
  return (
    <div >
      <CreatTask changeUser={props.changeUser}/>
      <AllTasks/>
    </div>
  );
};

export default AdminDashboard;
