import "@/styles/globals.css";
import { Box } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to right bottom, #a551ff , #46e0e3f8)",
          width: "100%",
          height: "100vh",
        }}
      >
        <Component {...pageProps} />
      </Box>
    </>
  );
}
