import React, { useState } from "react";
import { Button, Tooltip, useTheme, Zoom } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { toast } from "react-toastify";
import { tooltipStyles, buttonStyles } from "../styles/CopyToClipboard.styles";

interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const theme = useTheme();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("Copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy:", error);
      toast.error("Failed to copy!");
    }
  };

  return (
    <Tooltip
      title={copied ? "Copied!" : "Copy to clipboard"}
      arrow
      placement="top"
      TransitionComponent={Zoom}
      TransitionProps={{ timeout: 300 }}
      sx={tooltipStyles(theme)}
    >
      <Button
        onClick={handleCopy}
        variant={copied ? "contained" : "outlined"}
        color={copied ? "success" : "primary"}
        size="medium"
        startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
        sx={buttonStyles(copied)}
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </Tooltip>
  );
};

export default CopyToClipboard;