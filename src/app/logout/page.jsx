"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-white">Redirecting...</div>
    </div>
  );
}

export default Header;