import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  CircularProgress,
  InputAdornment,
  useTheme,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import SendIcon from "@mui/icons-material/Send";
import {
  formContainerStyles,
  textFieldStyles,
  submitButtonStyles,
} from "../styles/UrlShortenForm.styles";
import { toast } from "react-toastify";

interface UrlShortenFormProps {
  onSubmit: (originalUrl: string) => void;
  isLoading: boolean;
}

const UrlShortenForm: React.FC<UrlShortenFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const theme = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,})|" +
        "localhost|" +
        "\\d{1,3}(\\.\\d{1,3}){3})" +
        "(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?$"
    );

    if (!url.trim() || !urlPattern.test(url)) {
      setError("Please enter a valid URL.");
      toast.error("Invalid URL. Please check and try again.");
      return;
    }

    onSubmit(url);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap={3}
      sx={formContainerStyles}
    >
      <TextField
        placeholder="Paste your long URL here..."
        variant="outlined"
        fullWidth
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        error={!!error}
        helperText={error}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LinkIcon color="primary" />
            </InputAdornment>
          ),
        }}
        sx={textFieldStyles(theme)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading}
        endIcon={
          isLoading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <SendIcon />
          )
        }
        sx={submitButtonStyles}
      >
        {isLoading ? "Processing..." : "Shorten URL"}
      </Button>
    </Box>
  );
};

export default UrlShortenForm;
