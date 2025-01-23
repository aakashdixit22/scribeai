"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className
}) => {
  return (
    <motion.section
      className={cn(
        "mx-auto w-full bg-indigo-800 relative rounded-3xl overflow-hidden",
        containerClassName
      )}>
      <div
        className="relative h-full sm:mx-0 sm:rounded-3xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}>
        <motion.div
          className={cn("h-full px-4 py-10 sm:px-10", className)}>
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};