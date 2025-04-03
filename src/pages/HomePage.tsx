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
    try {
      setError(null);
      setIsLoading(true);
      const response = await shortenUrl(originalUrl);
      setShortenedUrl(response.shortUrl);
      toast.success("URL shortened successfully!");
    } catch (err: unknown) {
      setError("Failed to shorten the URL. " + err);
      toast.error("Failed to shorten the URL.");
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
