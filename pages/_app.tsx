import "@/styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { auth } from "./firebase";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Box
          w="100%"
          h="100vh"
          bgImage="linear-gradient(to-br, #a551ff , #46e0e3f8)"
        >
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  );
}
