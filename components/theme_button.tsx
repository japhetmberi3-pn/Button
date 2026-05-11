"use client"

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { button } from "framer-motion/client";


export default function ThemeButton() {
    const { theme, setTheme} = useTheme();
    const [mouted, setMounted] = useState (false);
    console.log('theme');

    useEffect(() => {
        setMounted(true);
    },[]);

    if (!mouted) return null; 

    return (
        <button 
        onClick={()=>
            setTheme(theme === "dark" ? "light" : "dark")
            // console.log('debug');

        }
        className="p-2 rounded border bg-black">

        {theme === "dark" ? <Sun/> : <Moon/>}
        </button>
    );
}

