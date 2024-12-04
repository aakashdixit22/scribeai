"use client";
import React from 'react'
import { ConvexProvider, ConvexReactClient } from "convex/react";//establish your clietn side app to connect to the convex network

function Provider({children}) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <div>
        <ConvexProvider client={convex}>{children}</ConvexProvider>
    </div>
  )
}

export default Provider;