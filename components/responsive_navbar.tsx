"use client";

import { useState, useEffect } from "react";
export default function ResponsiveNavbar() {
      const [isMenuOpen,setIsMenuOpen] = useState(false);

  useEffect(() => {
    const btn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!btn || !mobileMenu) return;

    const handleClick = () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    };

    btn.addEventListener("click", handleClick);

    return () => {
      btn.removeEventListener("click", handleClick);
    };
  }, []);

return (
      <>
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-500 relative pb-6">

                <a className="text-2xl font-bold">
                    Neo<span className="text-blue-600">Binaty</span>
                </a>

                    <button id="menu-btn" className="md:hidden flex flex-col gap-1.5 cursor-pointer">
                        <span className="block w-6 h-0.5 bg-gray-800"></span>
                        <span className="block w-6 h-0.5 bg-gray-800"></span>
                        <span className="block w-6 h-0.5 bg-gray-800"></span>
                    </button>


                <div id="menu" className="hidden md:flex gap-8">
                    <a className="text-orange-500 font-medium hover:text-black" 
                
                    href="">Accueil</a>
                    
                    <a className="text-gray-500 hover:text-orange-500" 
                    
                    href="">A propos</a>
                    
                    <a className="text-gray-500 hover:text-orange-500" 
                    
                    href="">Service</a>
                    
                    <a className="text-gray-500 hover:text-orange-500" 
                    
                    href="">Témoingnage</a>
                    
                    <a className="text-gray-500 hover:text-orange-500"
                    
                    href="">Contact</a>
                </div>
               
                <button className="hidden md:block ml-5 bg-orange-600 text-white px-5 py-2 rounded text-sm font-semibold uppercase tracking-wide hover:bg-orange-700"> 
                    Validation
                </button>
                
      </nav>

                    <div id="mobile-menu" className="hidden md:hidden flex-col bg-white border-b border-gray-200 px-8 py-4 gap-4">

                        <a className="text-orange-500 font-medium" href="">
                            
                            Accueil</a>

                        <a className="text-gray-500 hover:text-orange-500"
                        
                        href="">A propos</a>

                        <a className="text-gray-500 hover:text-orange-500"
                        
                        href="">Service</a>

                        <a className="text-gray-500 hover:text-orange-500"
                        
                        href="">Témoingnage</a>

                        <a className="text-gray-500 hover:text-orange-500"
                        
                        href="">Contact</a>

                        <button className="bg-orange-600 text-white px-5 py-2 rounded text-sm font-semibold uppercase tracking-wide w-full">
                            Validation
                        </button>
                    </div>
      </>
       
);                  
                    
}
