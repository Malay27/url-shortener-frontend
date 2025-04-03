import { SxProps, Theme } from "@mui/material";

export const headerContainerStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start", // Align the logo to the left
  padding: "10px 20px", // Add some padding for spacing
};

export const logoStyles: SxProps<Theme> = {
  width: "150px", // Adjust the width of the logo
  height: "auto", // Maintain aspect ratio
  borderRadius: "8px", // Optional: Add slight rounding for a softer look
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  transition: "transform 0.3s ease-in-out", // Smooth hover effect
  "&:hover": {
    transform: "scale(1.05)", // Slight zoom on hover
  },
};