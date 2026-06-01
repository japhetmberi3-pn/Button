
import { motion, useScroll, useTransform} from "framer-motion";
import ThemeButton from "@/components/theme_button";



export default function Navbar() {
        const { scrollY } = useScroll(); // detete le scroll
        const z = useTransform(scrollY, [0,300], [0,150]);

    return (
        <nav className="flex items-center pl-19 w-full border-b border-gray-500 pb-2">
                                <motion.img drag
                                dragSnapToOrigin
                                    whileHover={{scale: 1.3}} 
                                    whileTap={{scale: 0.90}}
                                    initial= {{opacity: 0}}
                                    animate= {{opacity: 1}}
                                     transition={{
                                            scale: {
                                                duration: 0.3
                                            },
                                            opacity: {
                                                duration: 1.5,
                                                repeat: Infinity
                                            }
                                        }}
                                    className="h-8 w-8" src="/images/Sans titre.png" alt="Menu burger" />
                                    <a href="Choisir spy" className="text-black dark:text-white pl-[37] pb-2">Choisir spy</a>
                                    <a href="Produits" className="text-black dark:text-white pl-[37] pb-2">Produits</a>
                                    <a href="Tarrifications" className="text-black dark:text-white pl-[37] pb-2">Tarrifications</a>
                                    <a href="Entreprise" className="text-black dark:text-white pl-[37] pb-2">Entreprise</a>
                                <motion.button drag
                                dragSnapToOrigin
                                       whileHover={{scale: 1.3, backgroundColor:"#727272"}} 
                                        whileTap={{scale: 0.90}}
                                        transition={{
                                            duration: 0.3
                                         }}
                                    className="cursor pl-[50] ml-[250] rounded-full px-8 py-2 bg-black dark:bg-red-500 text-white">
                                    Se connecter
                                </motion.button>
        
                                <motion.button drag
                                dragSnapToOrigin
                                        whileHover={{scale: 1.3, backgroundColor:"#727272"}} 
                                         whileTap={{scale: 0.90}}
                                        transition={{
                                            duration: 0.3
                                        }}
                                    className="cursor pl-[50] ml-3 rounded-full px-8 py-2 text-white bg-black dark:bg-red-500">
                                    Demarrer gratuitement
                                </motion.button>
        
                                <ThemeButton/>
        
                            </nav>
    );
                      
   }