import * as React from "react";
import NavBar from "../navbar/NavBar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export function Agents() {
  return (
    <div>
      <NavBar />
      <div>Agentes</div>
      <div>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://smartsoft.com.co/">
            SmartSoft Solutions S.A.S.
          </Link>{" "}
          2023
        </Typography>
      </div>
    </div>
  );
}

export default Agents;
