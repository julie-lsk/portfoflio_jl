import './skills.scss';


/* Icônes langages */
import big3 from "../../../utils/assets/langages/html_css_js.webp";
import sass from "../../../utils/assets/langages/sass.webp";
import react from "../../../utils/assets/langages/react.webp";
import framerMotion from "../../../utils/assets/langages/framer_motion.webp";
import git from "../../../utils/assets/langages/git.webp";
import github from "../../../utils/assets/langages/github.webp";
import nodeJS from "../../../utils/assets/langages/node_js.webp";
import mongoDB from "../../../utils/assets/langages/Mongodb.webp";
import expressJS from "../../../utils/assets/langages/express_js.webp";
import vscode from "../../../utils/assets/langages/vscode.webp";
import figma from "../../../utils/assets/langages/figma.webp";
import gimp from "../../../utils/assets/langages/gimp.webp";


function Skills()
{
  return (
    <>
    <table>

      <thead>
        <tr>
          <th>Langages</th>
          <th>Outils</th>
          <th>Savoirs</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><img src={big3} title="JavaScript - HTML - CSS" alt="JavaScript - HTML - CSS" /> HTML - CSS - JavaScript</td>
          <td><img src={vscode} title="VS Code" alt="VS Code" /> VS Code</td>
          <td>Méthode Agile/Scrum</td>
        </tr>
        <tr>
          <td><img src={sass} title="SASS - SCSS" alt="SASS - SCSS" /> SCSS</td>
          <td><img src={git} title="git - outil de versioning" alt="git - outil de versioning" /> Git</td>
          <td> Responsive Design</td>
        </tr>
        <tr>
          <td><img src={react} title="React"  alt="React" /> React</td>
          <td><img src={github} title="GitHub" alt="GitHub" /> GitHub</td>
          <td> SEO</td>
        </tr>
        <tr>
          <td><img src={nodeJS} title="Node.js" alt="Node.js" id="small" /> Node.js</td>
          <td><img src={figma} title="Figma" alt="Figma" id='large' /> Figma</td>
          <td> Optimisation des performances</td>
        </tr>
        <tr>
          <td><img src={mongoDB} title="Mongo DB" alt="Mongo DB" id="small" /> MongoDB</td>
          <td><img src={gimp} title="GIMP" alt="GIMP" /> GIMP</td>
          <td> REST API</td>
        </tr>
        <tr>
          <td><img src={expressJS} title="Express.js" alt="Express.js" id="small" /> ExpressJS</td>
          <td><img src={framerMotion} title="Framer-motion" alt="Framer-motion" /> Framer Motion</td>
          <td> Intégration de maquette</td>
        </tr>
      </tbody>
      
    </table>

    <div className="skills-list">
      <ul>

        <li>
          <h4>Langages</h4>

          <ul>
            <li>HTML - CSS - JavaScript <img src={big3} alt="JavaScript - HTML - CSS" /></li>
            <li>SCSS <img src={sass} alt="SASS - SCSS" /></li>
            <li>React <img src={react} alt="React" /></li>
            <li>Node.js <img src={nodeJS} alt="Node.js" className="small" /></li>
            <li>MongoDB <img src={mongoDB} alt="Mongo DB" className="small" /></li>
            <li>ExpressJS <img src={expressJS} alt="Express.js" className="small" /></li>
          </ul>

        </li>

        <li>
          <h4>Outils</h4>

          <ul>
            <li>VS Code <img src={vscode} alt="VS Code" /></li>
            <li>Git <img src={git} alt="git - outil de versioning" /></li>
            <li>GitHub <img src={github} alt="GitHub" /></li>
            <li>Figma <img src={figma} alt="Figma" id='large' /></li>
            <li>GIMP <img src={gimp} alt="GIMP" /></li>
            <li>Framer Motion <img src={framerMotion} alt="Framer-motion" /></li>
          </ul>

        </li>

        <li>
          <h4>Savoirs</h4>

          <ul>
            <li>Méthode Agile/Scrum</li>
            <li>Responsive Design</li>
            <li>SEO</li>
            <li>Optimisation des performances</li>
            <li>REST API</li>
            <li>Intégration de maquette</li>
          </ul>

        </li>
      </ul>
    </div>
    </>
  )
};

export default Skills;