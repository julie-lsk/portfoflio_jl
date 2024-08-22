// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {motion} from 'framer-motion';


function ContactForm() 
{
  const [state, handleSubmit] = useForm("mgvwzwen");

  if (state.succeeded) {
    return <p id='submited'>Votre message a bien été envoyé ! <br/>Merci :)</p>;
  }


  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{opacity: 0}} 
      whileInView={{opacity: 1}} 
      transition={{delay: 4, duration: 1}}
      >

      <input id="email" type="email" name="email" placeholder="E-mail" required />

      <ValidationError 
        prefix="Email" /* texte qui précède le message d'erreur */
        field="email" /* indique le champs associé à l'erreur */
        errors={state.errors}
      />

      <textarea id="message" name="message" rows={8} placeholder="Votre message" required />

      <ValidationError 
        prefix="Message" /* texte qui précède le message d'erreur */
        field="message"  /* indique le champs associé à l'erreur */
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>

    </motion.form>
  );
};

export default ContactForm;