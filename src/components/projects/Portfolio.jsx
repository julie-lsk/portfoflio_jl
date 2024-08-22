import {motion, useScroll, useSpring, useTransform} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import "./portfolio.scss";
import projects from "../../data/projects.json";
import Project from "./project/Project";


/* Retire animation sur nuage si écran trop petit */
function useIsTablet()
{
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const checkIsTablet = () => {
            setIsTablet(window.innerWidth <= 1500)
        };

        checkIsTablet();
        window.addEventListener("resize", checkIsTablet);

        return () => window.removeEventListener("resize", checkIsTablet)
    }, []);

    return isTablet;
}

/* Retire animation sur avion */
function useIsSmall()
{
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const checkIsSmall = () => {
            setIsSmall(window.innerWidth <= 738)
        };

        checkIsSmall();
        window.addEventListener("resize", checkIsSmall);

        return () => window.removeEventListener("resize", checkIsSmall)
    }, []);

    return isSmall;
}



function Portfolio()
{
    const ref = useRef();
    const isTablet = useIsTablet();
    const isSmall = useIsSmall();


    const {scrollYProgress} = useScroll({
        target: ref, /* élément suivi pour le scroll */
        offset: ["end end", "start start"] /* définit qd l'animation commence et termine */
        // "end end": commence quand le bas de l'élément atteint le bas de la fenêtre
        // "start start": se termine quand le haut de l'élément atteint le haut de la fenêtre
    });

    const {scrollYProgress: scrollAnimation} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
        // "start end": commence quand le haut de l'élément atteint le bas de la fenêtre
        // "end start": se termine quand le bas de l'élément atteint le haut de la fenêtre
    });


    // Paramétrage de l'animation de la barre de progression :
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, /* raideur de l'animation (plus élevé = plus réactif) */
        damping: 30, /* amortissement (plus bas = plus d'oscillations) */
    });


    const yAvion = useTransform(scrollAnimation, [0, 1], ["-200%", "10%"]); /* entrée : début défilement | sortie : position */
    const xNuage = useTransform(scrollAnimation, [0, 1], ["-80%", "0%"]);

    // Si l'écran devient trop petit, on enlève l'animation
    const nuageStyle = isTablet 
    ? {x: "0%"}
    : {x: xNuage};

    const avionStyle = isSmall 
    ? {y: "0%"}
    : {y: yAvion};


    return (

        <div className="portfolio" id="Portfolio" ref={ref}>

            {/* Barre de progression */}
            <div className="progress">

                <h3>Mes projets</h3>

                <motion.div style={{scaleX: scaleX}} className="progressBar"></motion.div>

            </div>

            <div className='projects-flex'>
                {projects.map((project) => (
                    <Project project={project} key={project.id} /> 
                ))}
            </div>

            <motion.div style={nuageStyle} className="nuage"></motion.div>
            <motion.div style={avionStyle} className="avion"></motion.div>

        </div>

    )
};

export default Portfolio;