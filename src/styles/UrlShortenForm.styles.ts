import { SxProps, Theme, alpha } from "@mui/material";

export const formContainerStyles: SxProps<Theme> = {
  width: "100%",
  position: "relative",
  transition: "all 0.3s ease-in-out",
};

export const textFieldStyles = (theme: Theme): SxProps<Theme> => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 2, // No excessive rounding
    backgroundColor: alpha("#f5f0e1", 0.9), // Soft parchment color
    transition: "all 0.3s",
    padding: "6px 16px",
    fontFamily: "inherit", // Feels more organic
    "&:hover": {
      boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.3)}`,
      backgroundColor: "#fefaf3", // Gentle aged paper effect
    },
    "&.Mui-focused": {
      boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.4)}`,
      backgroundColor: "#fdf8ec", // Subtle warm highlight
    },
  },
  "& .MuiFormHelperText-root": {
    position: "absolute",
    bottom: -22,
    marginLeft: 0,
    fontWeight: 500,
    fontStyle: "italic", // Slightly storybook-like
  },
});

export const submitButtonStyles: SxProps<Theme> = {
  padding: "10px 18px",
  height: "46px", 
  borderRadius: 2, // No overdoing roundness
  fontWeight: "bold",
  fontSize: "16px",
  textTransform: "none",
  transition: "all 0.3s ease-in-out",
  backgroundColor: "#e8dfca", // Warm, inviting tone
  color: "#3e2723", // Soft earthy brown
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  alignSelf: "center",
  width: "100%",
  whiteSpace: "nowrap",
  "& .MuiButton-endIcon": {
    marginLeft: 1,
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "#ded4bb", // Slight aged-paper effect
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
};
