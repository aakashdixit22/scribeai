"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";
import { api } from "../../convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";


export default function Home() {
  const {user}=useUser();
  const createUser = useMutation(api.user.createUser);

  //we'll call the const user in useeefeect
  useEffect(()=>{
    //if user is logged in
    user && CheckUser();
  },[user]);
  const CheckUser = async () => {
    //accees the user info
    const result = await createUser({
      email:user?.primaryEmailAddress?.emailAddress,
      imageUrl:user?.imageUrl,
      userName:user?.fullName,
    });
    
  };


  return (
    <div>
    <h1>Home</h1>
    <Button>Click here</Button>
    <UserButton />
    </div>
  );
}
