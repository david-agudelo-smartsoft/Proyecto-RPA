import * as React from "react";
import NavBar from "../components/navbar/NavBar";
import TaskTable from "../components/table/TaskTable";
import Footer from "../components/footer/Footer";

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
