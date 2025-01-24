"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";

function Header() {
  const router = useRouter();
  const { signOut } = useClerk();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function handleSignOut() {
      try {
        await signOut();
        router.push("/");
      } catch (error) {
        console.error("Logout failed:", error);
        router.push("/");
      } finally {
        setIsLoading(false);
      }
    }
    handleSignOut();
  }, [signOut, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-white">
        {isLoading ? "Signing out..." : "Redirecting..."}
      </div>
    </div>
  );
}

export default Header;