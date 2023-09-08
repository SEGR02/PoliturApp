"use client";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const sellerId = localStorage.getItem("sellerId");
  const isAdmin = localStorage.getItem("isAdmin");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isAuthenticated = checkAuthentication(sellerId);

    if (!isAuthenticated) {
      router.push("/login");
    } else {
      if (isAdmin) {
        router.push("/admin/dailyReport");
        pathname.includes("seller")
          ? router.push("/login")
          : router.push("/login");
      } else {
        router.push("/seller/createClient");
        pathname.includes("admin")
          ? router.push("/login")
          : router.push("/login");
      }
    }
  }, []);

  const checkAuthentication = (isAdmin: any) => {
    if (isAdmin) return true;
    else return false;
  };

  return children;
}

export default ProtectedRoute;
