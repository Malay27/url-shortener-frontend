import { SxProps, Theme, alpha } from "@mui/material";

export const containerStyles: SxProps<Theme> = {
  py: 8,
};

export const mainPaperStyles = (): SxProps<Theme> => ({
  borderRadius: 3,
  overflow: "hidden",
  background: `linear-gradient(135deg, ${alpha("#a8c0ff", 0.8)} 0%, ${alpha("#3f2b96", 0.9)} 100%)`,
  boxShadow: "4px 6px 12px rgba(0, 0, 0, 0.15)",
});

export const contentBoxStyles: SxProps<Theme> = {
  p: 5,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 5,
  position: "relative",
  color: "#3e2723", // Warm earthy brown
  fontFamily: "inherit",
};

export const backgroundOverlayStyles: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
  backgroundSize: "22px 22px", // Subtle, fabric-like texture
};

export const headerContainerStyles: SxProps<Theme> = {
  zIndex: 1,
  textAlign: "center",
};

export const titleFlexStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  mb: 1,
};

export const titleTextStyles: SxProps<Theme> = {
  fontWeight: 800,
  letterSpacing: "-0.5px",
  textShadow: "2px 2px 6px rgba(0,0,0,0.2)", // Deeper, soft shadow
};

export const subtitleStyles: SxProps<Theme> = {
  fontWeight: 400,
  opacity: 0.85,
  fontStyle: "italic", // Soft, Ghibli-inspired handwritten feel
};

export const formPaperStyles: SxProps<Theme> = {
  width: "100%",
  borderRadius: 2,
  p: 4,
  backgroundColor: "#fefaf3", // Aged paper-like color
  zIndex: 1,
};

export const errorBoxStyles = (theme: Theme): SxProps<Theme> => ({
  bgcolor: alpha(theme.palette.error.main, 0.15),
  p: 3,
  borderRadius: 2,
  boxShadow: "0 2px 6px rgba(255, 0, 0, 0.1)", // Softer, dreamier error box
});

export const errorTextStyles: SxProps<Theme> = {
  fontWeight: 500,
  color: "#9a0007", // Deeper red for warmth
};

export const footerStyles = (): SxProps<Theme> => ({
  p: 3,
  textAlign: "center",
  bgcolor: alpha("#e8dfca", 0.95), // Soft, warm background
  fontStyle: "italic", // Storybook-style footer
});