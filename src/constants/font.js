import localFont from "next/font/local";

export const modam = localFont({
  src: [
    {
      path: "../../public/fonts/Modam-Bold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Modam-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Modam-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Modam-Light.ttf",
      weight: "300",
    },
  ],
  variable: "--modam-font",
  style: "normal",
});
