import mouseScroll from "../../utils/assets/mouse_scroll.png";
import "./accueil.scss";


function Accueil()
{
    return (
        <div className="container-accueil">
            <div 
                className="accueil">

                <h1>Julie LAUSECKER</h1>
                <h2>DÉVELOPPEUSE WEB</h2>
                
                <h3>PORTFOLIO</h3>

                <img src={mouseScroll} className="scroll-button" alt="Icône d'une souris d'ordinateur"></img>

                <img src="./assets/half_moon.webp" className="moon" alt="Demi lune" loading="lazy"></img>

            </div>

        </div>
    )
};

export default Accueil;