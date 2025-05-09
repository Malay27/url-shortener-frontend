import React, { useState } from "react";
import UrlShortenForm from "../components/UrlShortenForm";
import { shortenUrl } from "../services/urlService";
import {
  Box,
  Typography,
  Container,
  Paper,
  useTheme,
  Divider,
} from "@mui/material";
import { toast } from "react-toastify";
import LinkIcon from "@mui/icons-material/Link";
import UrlResult from "../components/UrlResult";
import {
  containerStyles,
  mainPaperStyles,
  contentBoxStyles,
  backgroundOverlayStyles,
  headerContainerStyles,
  titleFlexStyles,
  titleTextStyles,
  subtitleStyles,
  formPaperStyles,
  errorBoxStyles,
  errorTextStyles,
  footerStyles,
} from "../styles/HomePage.styles";

const HomePage: React.FC = () => {
  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const theme = useTheme();

  const handleSubmit = async (originalUrl: string) => {
    const successToastId = "success-toast";
    const errorToastId = "error-toast";

    try {
      setError(null);
      setShortenedUrl(null);
      setIsLoading(true);

      // Dismiss any existing toasts
      toast.dismiss();

      const response = await shortenUrl(originalUrl);

      const baseUrl = import.meta.env.VITE_BACKEND_URL;
      setShortenedUrl(`${baseUrl}/${response.shortUrl}`);

      // Show success toast with a unique ID
      toast.success("URL shortened successfully!", { toastId: successToastId });
    } catch (err: unknown) {
      setShortenedUrl(null);
      setError("Failed to shorten the URL. " + err);

      // Show error toast with a unique ID
      toast.error("Failed to shorten the URL.", { toastId: errorToastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={containerStyles}>
      <Paper elevation={6} sx={mainPaperStyles()}>
        <Box sx={contentBoxStyles}>
          {/* Background gradient overlay */}
          <Box sx={backgroundOverlayStyles} />

          {/* Content */}
          <Box sx={headerContainerStyles}>
            <Box sx={titleFlexStyles}>
              <LinkIcon fontSize="large" />
              <Typography variant="h3" sx={titleTextStyles}>
                URL Shortener
              </Typography>
            </Box>
            <Typography variant="h6" sx={subtitleStyles}>
              Transform long URLs into brief, memorable links
            </Typography>
          </Box>

          {/* Form */}
          <Paper elevation={4} sx={formPaperStyles}>
            <UrlShortenForm onSubmit={handleSubmit} isLoading={isLoading} />
          </Paper>
        </Box>

        {/* Results Section */}
        {shortenedUrl && <UrlResult shortenedUrl={shortenedUrl} />}

        {/* Error Display */}
        {error && (
          <Box sx={errorBoxStyles(theme)}>
            <Typography color="error" sx={errorTextStyles}>
              {error}
            </Typography>
          </Box>
        )}

        {/* Footer */}
        <Divider />
        <Box sx={footerStyles()}>
          <Typography variant="body2" color="text.secondary">
            Secure, fast, and reliable URL shortening service
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default HomePage;
