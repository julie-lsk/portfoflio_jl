import { useRef } from "react";
import {motion, useScroll, useTransform, } from "framer-motion";
import "./aPropos.scss";
import Skills from './skills/Skills';
import contact from '../../utils/assets/email.webp';
import cv from '../../utils/assets/cv.webp';


function APropos()
{
    const ref = useRef();

    /* Suit la progression du défilement vertical */
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"] /* l'animation démarre au top de la vue de l'utilisateur, + s'arrête au bottom  */
    })

    /* Suit le scroll en Y et le transforme en X grâce au style dans la motion.div */
    const xNuage1 = useTransform(scrollYProgress, [0, 1], ["-50%", "150%"]); 
    const xNuage2 = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]); 
    const xNuage3 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]); 
    const yBirds = useTransform(scrollYProgress, [0, 1], ["500%", "-100%"]); 

    return (
        <div className="APropos" ref={ref}>

            <motion.div style={{x: xNuage1}} className="nuage-1"></motion.div>
            <motion.div style={{x: xNuage2}} className="nuage-2"></motion.div>
            <motion.div style={{x: xNuage3}} className="nuage-3"></motion.div>
            <motion.div style={{y: yBirds}} className="birds"></motion.div>

            

            <div className="flex">
                
                <div className="description">
                    <h3>Qui suis-je ?</h3>

                    <p>Je suis <strong>Julie</strong>, j'ai 23 ans et je suis Développeuse Web Junior avec un intérêt particulier pour le <strong>front-end</strong>.</p> 

                    <p className="paragraphe">J'ai suivi une formation en développement web qui m'a permis de réaliser 7 projets sur diverses thématiques : front, back, SEO, gestion de projet...</p> <br />
                    <p>Grâce à elle, j'ai compris que je souhaite développer mes compétences dans la création d'interface utilisateur (UI) afin d'améliorer l'expérience utilisateur (UX).</p>

                    <p className="paragraphe">Afin d'aller plus loin dans mon apprentissage, je suis à la recherche d'une <strong>alternance</strong> pour réaliser une licence informatique dès la rentrée de <strong>septembre 2024</strong>.</p> <br />
                    <p>Je suis très motivée à poursuivre mes études, afin d'apprendre tout en travaillant sur des projets concrets !</p>

                    <p className="space">Hâte de pouvoir en discuter avec vous !</p>

                    <a href="#Contact">
                        <img src={contact} alt="Icône mail" id="icon-contact" ></img>
                    </a>
                    
                </div>

                <div className="skills-container">

                    <h3>Mes compétences</h3>

                    <Skills />

                    <p>Vous pouvez aussi télécharger mon CV :</p>

                    <a href="./cv_julie_lausecker.pdf" download>
                        <img src={cv} alt="Icône CV" id="icon-cv" ></img>
                    </a>
                    
                </div>

            </div>

        </div>
    )
};

export default APropos;