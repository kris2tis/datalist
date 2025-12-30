import React from "react";
import ReactQueryProvider from "./react-query";

export default function Providers({ children }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
