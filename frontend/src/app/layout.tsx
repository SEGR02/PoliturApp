import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from "../store/Providers";
import ProtectedRoutes from "@/app/components/ProtectedRoutes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Politur App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <ProtectedRoutes>
          <body style={{ margin: "0" }} className={inter.className}>
            {children}
          </body>
        </ProtectedRoutes>
      </Providers>
    </html>
  );
}
