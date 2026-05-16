"use client";
import { motion, useScroll, useTransform} from "framer-motion";
import {Parallax} from "react-parallax";
import ThemeButton from "@/components/theme_button";


export default function Produits (){



const { scrollY } = useScroll(); // detete le scroll

const z = useTransform(scrollY, [0,300], [0,150]); // mouvement de l'image

    return (
        <div>
            <div>
                <div className="pt-5 bg-white h-30">
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
                            <a href="Choisir spy" className="text-black pl-[37] pb-2">Choisir spy</a>
                            <a href="Produits" className="text-black pl-[37] pb-2">Produits</a>
                            <a href="Tarrifications" className="text-black pl-[37] pb-2">Tarrifications</a>
                            <a href="Entreprise" className="text-black pl-[37] pb-2">Entreprise</a>
                        <motion.button drag
                        dragSnapToOrigin
                               whileHover={{scale: 1.3, backgroundColor:"#727272"}} 
                                whileTap={{scale: 0.90}}
                                transition={{
                                    duration: 0.3
                                 }}
                            className="text-black cursor pl-[50] ml-[250] rounded-full px-8 py-2 bg-black text-white">
                            Se connecter
                        </motion.button>

                        <motion.button drag
                        dragSnapToOrigin
                                whileHover={{scale: 1.3, backgroundColor:"#727272"}} 
                                 whileTap={{scale: 0.90}}
                                transition={{
                                    duration: 0.3
                                }}
                            className="text-black cursor pl-[50] ml-3 rounded-full px-8 py-2 text-white bg-black">
                            Demarrer gratuitement
                        </motion.button>

                        <ThemeButton/>

                    </nav>

                    <div className="mt-2 flex gap-6 ml-20">
                        <a href="#" className="text-black ">Blog</a>
                        <a href="#" className="text-black ">Créer son activité</a>
                        <a href="#" className="text-black ">Idées E-commerce</a>
                        <a href="#" className="text-black ">Nouveautés</a>
                        <a href="#" className="text-black ">PLus</a>
                    </div>
                </div>

                <div>

                    <div className="relative flex items-center justify-center ">
                        <motion.h2 drag
                            dragSnapToOrigin
                            initial= {{x: -270,}}
                            animate={{
                                x: 175,
                                 scale: [1, 1.3, 1],// zoom (moyen grand moyen)
                                color: ["#470722","#074737","#420747","#470722"]
                            }} 
                            transition={{
                                 x: {
                                        duration: 2, // vitesse du mouvement
                                        repeat: Infinity,
                                        repeatType: "reverse"

                                    },

                                      scale: {
                                            duration: 1,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        },

                                 color: {
                                        duration: 1, // vitesse des couleurs
                                        repeat: Infinity,
                                        ease: "linear"
                                    }
                            }}
                            
                            className="h-40 text-3xl pt-[85px]">
                                COMMENCEZ À VENDRE AVEC SPY DÈS AUJOURD'HUI 
                        </motion.h2>

                        <motion.img drag
                        dragSnapToOrigin
                            whileHover={{scale: 1.3}} 
                           whileTap={{scale: 0.90}}
                                 animate= {{rotate: 25,
                         scale: [1, 1.3, 1],


                        }}
                            transition= {{
                                
                                rotate: {
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                },
                                scale: {
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }
                          }}
                            className="absolute right-20 h-25 w_20  rounded-t-lg rounded-b-x" src="/images/1.png" alt="" />
                    </div>

                    <motion.p drag
                       dragSnapToOrigin
                        className="pl-[327]">Commencez dès aujourd'hui votre essaie gratuit avec SPY. Puis utilisez ces rerrouces pour vous
                        <br /> <span className="pl-[225]">guider à chaque étape du processus.</span>
                     </motion.p>
                        <div className="pl-[357] pt-5">
                            <motion.button drag
                            dragSnapToOrigin
                                whileHover={{scale: 1.3, backgroundColor:"#072047"}}
                               whileTap={{scale: 0.90}}

                                transition={{
                                    duration: 0.3
                                }}
                                className="pl-[50] cursor-pointer transition  rounded-full px-6 py-2 bg-white text-black ml-4">
                                Démarrer gratuitement
                            </motion.button>

                            <motion.button drag
                            dragSnapToOrigin
                                whileHover={{scale: 1.3, backgroundColor:"#3f0747"}} 
                                 whileTap={{scale: 0.90}}

                                 transition={{
                                    duration: 0.3
                                }}
                                className="pl-[30] cursor-pointer rounded-full bg-yellow-700/50 px-6 py-2 ml-10">
                                Comment fonctionne SPY
                             </motion.button>
                        </div>

                        <div className="flex">
                            <motion.img drag
                            dragSnapToOrigin
                              style={{y: z}}
                                whileHover={{scale: 1.3}}
                                 whileTap={{scale: 0.90}} 
                                 transition={{
                                    duration: 0.3
                                }}
                                className="ml-45 mt-10 w-100 rounded-t-lg rounded-b-xl"  src="/images/cos.png" alt="" />
                            <motion.img drag
                            dragSnapToOrigin
                                 style={{y: z}}
                                whileHover={{scale: 1.3}} 
                                whileTap={{scale: 0.90}}
                                 transition={{
                                    duration: 0.3
                                }}
                                className="ml-45 w-100 mt-10 rounded-t-lg rounded-b-xl" src="/images/Pop.png" alt="" />
                        </div>

                        <div>
                            <motion.p drag
                            dragSnapToOrigin
                                 style={{y: z}}                   
                                initial={{x:100}}
                                animate={{x:0}}
                                transition={{duration:0.2}}
                                className="mt-15 ml-80 items-center">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident porro voluptate veritatis
                                <br /> 
                                    <span>
                                        repellat aut molestiae animi officia, sint dignissimos excepturi dolorem explicabo quos cupiditate
                                    </span>
                                 <br /> <span className="ml-45">
                                            odit natus. Saepe aspernatur neque fugiat.
                                        </span>
                            </motion.p>
                        </div>

                        <div>
                            <motion.input   
                            drag
                            dragSnapToOrigin                    
                             style={{y: z}}
                            className="border border-white mt-15 ml-17 rounded-t-lg rounded-b-xl" type="email" />
                        </div>

                        <section>
                         <motion.p
                                className="pt[189]">Commencez dès aujourd'hui votre essaie gratuit avec SPY. Puis utilisez ces rerrouces pour vous
                        <br /> <span className="pt-[80]">guider à chaque étape du processus.</span>
                     </motion.p>   
                        </section>

                        <div className="flex center ">
                            <motion.img drag
                            dragSnapToOrigin
                                style={{y: z}}                    
                                whileHover={{scale: 1.3}} 
                                whileTap={{scale: 0.90}}
                                 transition={{
                                    duration: 0.3
                                }}
                                className="h-8 w-8 ml-143 cursor-pointer rounded-full" src="/images/Tik.png" alt="" />
                            <motion.img drag
                            dragSnapToOrigin
                                style={{y: z}}                    
                                whileHover={{scale: 1.3}} 
                                whileTap={{scale: 0.90}}
                                 transition={{
                                    duration: 0.3
                                }}
                                className="h-8 w-8 ml-5 rounded-full" src="/images/titre.png" alt="" />
                            <motion.img drag
                            dragSnapToOrigin
                                style={{y: z}}                    
                                whileHover={{scale: 1.3}} 
                                whileTap={{scale: 0.90}}
                                 transition={{
                                    duration: 0.3
                                }}
                                className="h-8 w-8 ml-5 rounded-full" src="/images/Sans.png" alt="" />
                            <motion.img drag
                            dragSnapToOrigin
                                style={{y: z}}                    
                                whileHover={{scale: 1.3}} 
                                whileTap={{scale: 0.90}}
                                 transition={{
                                    duration: 0.3
                                }}
                                className="h-8 w-8 ml-5 rounded-full" src="/images/images.png" alt="" />
                            
                        </div>
                </div>
              
            </div>
        </div>
    )
}