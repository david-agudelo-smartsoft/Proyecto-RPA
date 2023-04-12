import * as React from "react";
import NavBar from "../navbar/NavBar";
import TaskTable from "../table/TaskTable";
import Footer from "../footer/Footer";

export function Task() {
  return (
    <div>
      <NavBar />
      <TaskTable />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Task;
