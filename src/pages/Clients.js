import * as React from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import ClientTable from "../components/table/ClientTable";
function Clients() {
  return (
    <div>
      <NavBar />
      <ClientTable />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Clients;