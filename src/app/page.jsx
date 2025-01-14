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
    <div>
      <HomeNavbar />

      <Hero />
      <Features />
      <About />
      <DevelopersShowcase />
      <Contact />
      <Footer />
      
    </div>
  );
}
