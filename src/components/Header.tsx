import React from "react";
import { Box } from "@mui/material";
import { headerContainerStyles, logoStyles } from "../styles/Header.styles";

const Header = () => {
  return (
    <Box sx={headerContainerStyles}>
      <img src="/logo.png" alt="Logo" style={logoStyles as React.CSSProperties} />
    </Box>
  );
};

export default Header;