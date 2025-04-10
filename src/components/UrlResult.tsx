import React from "react";
import { Box, Typography, Paper, Link, useTheme } from "@mui/material";
import { alpha } from "@mui/system";
import CopyToClipboard from "./CopyToClipboard";

interface UrlResultProps {
  shortenedUrl: string;
}

const UrlResult: React.FC<UrlResultProps> = ({ shortenedUrl }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: alpha(theme.palette.background.paper, 0.9),
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500 }}>
        Your shortened URL is ready!
      </Typography>

      <Paper
        elevation={1}
        sx={{
          p: 2,
          px: 3,
          borderRadius: 2,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          bgcolor: alpha(theme.palette.primary.light, 0.1),
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
        }}
      >
        <Link
          href={shortenedUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontWeight: 600,
            color: theme.palette.primary.main,
            textDecoration: "none",
            flex: 1,
            wordBreak: "break-word",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {shortenedUrl}
        </Link>
        <CopyToClipboard text={shortenedUrl} />
      </Paper>
    </Box>
  );
};

export default UrlResult;
