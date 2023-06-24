import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Box
          w="100%"
          h="100vh"
          bgImage="linear-gradient(to-br, #a551ff , #46e0e3f8)"
        > */}
      <Component {...pageProps} />
    </>
  );
}
