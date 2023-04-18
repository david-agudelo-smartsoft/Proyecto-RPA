import React, {useEffect} from "react";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import ClientTable from "../components/table/ClientTable";
import { useMain } from '../../context/mainContext'


export function Clients() {
  const { getClients } = useMain();

  useEffect(() => {
    getClients();
  })
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
