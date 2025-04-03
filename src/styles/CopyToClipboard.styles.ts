import { SxProps, Theme } from "@mui/material";

export const tooltipStyles = (theme: Theme): SxProps<Theme> => ({
  "& .MuiTooltip-arrow": {
    color: theme.palette.grey[800],
  },
  "& .MuiTooltip-tooltip": {
    backgroundColor: "#f5f0e1", // Soft parchment-like color
    color: "#3e2723", // Warm earthy brown
    fontSize: "0.8rem",
    fontWeight: 500,
    padding: "8px 14px",
    borderRadius: 1,
    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.15)", // Subtle dreamy depth
  },
});

export const buttonStyles = (copied: boolean): SxProps<Theme> => ({
  padding: "10px 18px",
  borderRadius: 2, // No excessive rounding
  fontSize: "0.9rem",
  fontWeight: 600,
  textTransform: "none",
  transition: "all 0.3s ease-in-out",
  backgroundColor: copied ? "#81c784" : "#f5f0e1", // Inspired by nature
  color: copied ? "#2e7d32" : "#3e2723", // Soft earthy tones
  boxShadow: copied ? "0 4px 12px rgba(129, 199, 132, 0.2)" : "0 2px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: copied ? "#66bb6a" : "#e8dfca", // Subtle paper-like tint
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
    transform: "translateY(-1px)", // Slight floating effect
  },
  "&:active": {
    transform: "translateY(0)", // Gentle press effect
  },
});