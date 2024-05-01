import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Link } from "@mui/material";

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            href="/asdasdw"
            variant="h6"
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            My expenses
          </Link>
          <Typography sx={{ mr: 2 }} component="div">
            Ahmed Saleh
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
