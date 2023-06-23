import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { auth } from "./firebase";

export default function App({ Component, pageProps }: AppProps) {
  console.log(auth);
  return (
    <>
      {/* bgImage="linear-gradient(to-br, #a551ff , #46e0e3f8) */}
      <Component {...pageProps} />
    </>
  );
}
