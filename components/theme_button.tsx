"use client"

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion} from "framer-motion";



export default function ThemeButton() {
    const { theme, setTheme} = useTheme();
    const [mouted, setMounted] = useState (false);
    console.log('theme');

    useEffect(() => {
        setMounted(true);
    },[]);

    if (!mouted) return null; 

    return (
        <motion.button 
            drag
            dragSnapToOrigin
            whileHover={{scale: 1.3}} 
                 whileTap={{scale: 0.90}}
                 transition={{
                 duration: 0.3
                }}

        onClick={()=>
            setTheme(theme === "dark" ? "light" : "dark")
            // console.log('debug');

        }
        className="p-2 ml-13 rounded border bg-black rounded-full">

        {theme === "dark" ? <Sun/> : <Moon/>}
        </motion.button>
    );
}

