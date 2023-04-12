import React from 'react'
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Footer() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://smartsoft.com.co/">
                SmartSoft Solutions S.A.S.
            </Link>{" "}
            2023
        </Typography>
    )
}

export default Footer;