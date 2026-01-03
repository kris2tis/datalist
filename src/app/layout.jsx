import "../style/globals.css";
import { modam } from "../constants/font";
import { Toaster } from "sonner";
import ReactQueryProvider from "../shared/components/providers/react-query";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <link rel="icon" href="/brand/logo-icon.svg" /> 
      </head>
      <body
      
        className={`${modam.variable} flex flex-col font-display overflow-x-hidden`}
      >
        <main>
          <ReactQueryProvider>
            {children}
            <Toaster
              style={{ fontFamily: "inherit" }}
              position="top-center"
              className="toaster"
              toastOptions={{
                classNames: { success: "succes-toast", error: "error-toast" },
              }}
            />
          </ReactQueryProvider>
        </main>
      </body>
    </html>
  );
}
