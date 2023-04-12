import * as React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import BotTable from "../components/table/BotTable";

export function Bots() {
  return (
    <div>
      <NavBar />
      <BotTable />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Bots;
