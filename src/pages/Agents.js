import * as React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import AgentTable from "../components/table/AgentTable";

export function Agents() {
  return (
    <div>
      <NavBar />
      <AgentTable />
      <div>
        <Footer />
      </div>
    </div>
  );
}

