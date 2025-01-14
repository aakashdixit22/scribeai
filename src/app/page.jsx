"use client";

import { useEffect } from "react";
import { api } from "../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import HomeNavbar from "@/components/HomeNavbar";
import Hero from "@/components/Hero";
import DevelopersShowcase from "@/components/Developers";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Features } from "@/components/Features";
import Squares from "@/components/ui/Squares";

export default function Home() {
  const { user } = useUser();
  const createUser = useMutation(api.user.createUser);

  //we'll call the const user in useeefeect
  useEffect(() => {
    //if user is logged in
    user && CheckUser();
  }, [user]);
  const CheckUser = async () => {
    //accees the user info
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      imageUrl: user?.imageUrl,
      userName: user?.fullName,
    });
  };

  return (
    <div className="relative bg-black min-h-screen">
      <div className="fixed inset-0 z-0">
        <Squares
          speed={0.5}
          squareSize={80}
          direction="diagonal"
          borderColor="#272727"
          hoverFillColor="rgba(122, 122, 122, 0.2)"
        />
      </div>

      <div className="relative z-10">
        <HomeNavbar />
        <Hero />
        <Features />
        <About />
        <DevelopersShowcase />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
