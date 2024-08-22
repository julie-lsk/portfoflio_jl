import React from 'react';
import { useEffect, useState, useTransition } from 'react';
import {AnimatePresence} from "framer-motion";
import '../src/app.scss';


/********** Composants **********/
import Loader from "./components/loader/Loader";
import Accueil from "./components/accueil/Accueil";
import Navbar from "./components/navbar/Navbar";
import APropos from './components/a_propos/APropos';
import Portfolio from "./components/projects/Portfolio";
import Contact from './components/contact/Contact';



function App() 
{
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      startTransition(() => {
        setIsLoading(false);
      });
    }, []);
    return () => clearTimeout(timer);
  }, []);


  return (
    <AnimatePresence>

      {isPending || isLoading ? ( <Loader setIsLoading={setIsLoading} /> ) : 
      (

        <div>
        
          <Navbar />

          <section id='Accueil'>
            <Accueil />
          </section>
          
          <section id="À propos">
            <APropos />
          </section>

          <Portfolio />

          <section id='Contact'>
            <Contact />
          </section>
          
        </div>

      )}

    </AnimatePresence>
  )
};

export default App;