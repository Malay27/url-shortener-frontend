import { CssBaseline, Container } from "@mui/material";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ paddingTop: "20px" }}>
        <HomePage />
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
    </>
  );
};

export default App;
