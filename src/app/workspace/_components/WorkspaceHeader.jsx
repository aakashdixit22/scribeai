import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { redirect } from "next/navigation";
import React, { useState, useEffect } from "react";
import { api } from "../../../../convex/_generated/api";
import { useNotes } from "@/lib/context";
import {
  HomeIcon,
  GridIcon,
  MenuIcon,
  XIcon,
  SaveIcon,
  LogOutIcon,
} from 'lucide-react';
import Link from "next/link";

function WorkspaceHeader({ fileName, fileId }) {
  const { notes } = useNotes();
  const { user } = useUser();
  const saveNotes = useMutation(api.notes.AddNotes);
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    await saveNotes({
      fileId: fileId,
      notes: notes,
      createdBy: user?.primaryEmailAddress?.emailAddress,
    });
    setLoading(false);
    showToast("File saved successfully!");
  };

  const showToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    
    toast.className = `
      fixed top-20 right-4 
      transform translate-x-0
      flex items-center gap-3
      min-w-[300px] max-w-[90vw]
      px-4 py-3 rounded-lg
      ${type === 'success' ? 'bg-emerald-500/95 text-white' : 'bg-red-500/95 text-white'} 
      shadow-lg z-50
      transition-all duration-300 ease-out
    `;
  
    toast.innerHTML = `
      <div class="flex-shrink-0">
        ${type === 'success' 
          ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
          : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
        }
      </div>
      <p class="flex-1 text-sm font-medium">${message}</p>
    `;
  
    document.body.appendChild(toast);
  
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) { // Changed to 1024px (lg breakpoint)
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <div className="h-16 px-4 flex items-center justify-between bg-gray-900 text-white border-b border-gray-700 relative">
      {/* Logo - Only visible on lg screens */}
            <div className="w-[160px] hidden sm:flex items-center"> {/* Changed from lg:flex to sm:flex */}
        <div className="flex items-center gap-2"> {/* Reduced gap from 3 to 2 */}
          <img 
            src="/logo.png" 
            
            className="h-8 sm:h-8"
            alt="ScribeAI Logo" 
          />
          <span className="text-2xl sm:text-xl font-semibold truncate text-white">
            ScribeAI
          </span>
        </div>
      </div>

      {/* File Name */}
      <div className="flex-1 max-w-md mx-4">
        <div className="px-3 py-1.5 border border-gray-600 rounded-lg bg-gray-800 shadow-sm">
          <h1 className="text-lg text-center font-semibold text-gray-300 truncate">
            {fileName || "Untitled Document"}
          </h1>
        </div>
      </div>

      {/* Actions Group */}
      <div className="flex items-center space-x-3">
        <button
          onClick={handleSave}
          className="group relative rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]"
        >
          <div className="rounded-lg bg-slate-900 px-3 py-1.5 transition group-hover:bg-slate-800 flex items-center space-x-2">
            <SaveIcon className="w-4 h-4 text-white" />
            <span className="text-sm text-white">Save</span>
            {loading && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            )}
          </div>
        </button>

        {/* Hamburger Menu - Visible below lg screens */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <XIcon className="w-6 h-6 text-white" /> : <MenuIcon className="w-6 h-6 text-white" />}
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-4 top-16 bg-gray-800 rounded-lg shadow-md p-2 z-50">
            <Link href="/dashboard">
              <button className="group rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px] block w-full text-left mb-2">
                <div className="rounded-lg bg-slate-900 px-3 py-1.5 transition group-hover:bg-slate-800 flex items-center space-x-2">
                  <GridIcon className="w-4 h-4 text-white" />
                  <span className="text-sm text-white">Dashboard</span>
                </div>
              </button>
            </Link>

            <Link href="/">
              <button className="group rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px] block w-full text-left mb-2">
                <div className="rounded-lg bg-slate-900 px-3 py-1.5 transition group-hover:bg-slate-800 flex items-center space-x-2">
                  <HomeIcon className="w-4 h-4 text-white" />
                  <span className="text-sm text-white">Home</span>
                </div>
              </button>
            </Link>

            <div className="block lg:hidden">
              
                <button onClick={()=>redirect('/logout')} className="group rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px] block w-full text-left">
                  <div className="rounded-lg bg-slate-900 px-3 py-1.5 transition group-hover:bg-slate-800 flex items-center space-x-2">
                    <LogOutIcon className="w-4 h-4 text-white" />
                    <span className="text-sm text-white">Sign out</span>
                  </div>
                </button>
              
            </div>
          </div>
        )}

        {/* Desktop Navigation - Only visible on lg screens */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link href="/dashboard">
            <button className="group rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
              <div className="rounded-lg bg-slate-900 px-3 py-1.5 transition group-hover:bg-slate-800 flex items-center space-x-2">
                <GridIcon className="w-4 h-4 text-white" />
                <span className="text-sm text-white">Dashboard</span>
              </div>
            </button>
          </Link>

          <Link href="/">
            <button className="group rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
              <div className="rounded-lg bg-slate-900 px-3 py-1.5 transition group-hover:bg-slate-800 flex items-center space-x-2">
                <HomeIcon className="w-4 h-4 text-white" />
                <span className="text-sm text-white">Home</span>
              </div>
            </button>
          </Link>

          <div className="hidden lg:block">
            
              <button onClick={()=>redirect('/logout')} className="group rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
                <div className="rounded-lg bg-slate-900 px-3 py-1.5 transition group-hover:bg-slate-800 flex items-center space-x-2">
                  <LogOutIcon className="w-4 h-4 text-white" />
                  <span className="text-sm text-white">Sign out</span>
                </div>
              </button>
            
          </div>
        </div>

        {/* User Button */}
        <UserButton afterSignOutUrl="/logout" />
      </div>
    </div>
  );
}

export default WorkspaceHeader;