import skillsDatas from '../data/skills.json'
import '../style/skills.sass'

function SkillsComponent() { 
    return (
        <div id='skillBlock'>
            {skillsDatas.map(({ image, titre }, index) => (
                <Skills key={index} image={image} titre={titre} />
            ))}
        </div>
    );
}
/*Importation dynamiquement de chaque données des competences*/

function Skills({ image, titre }) {
    return (
        <div id="skillsBlock">
            <div id="skills">
                <div className="skill">
                    <img src={image} alt="" />
                    <p>{titre}</p>
                </div>
            </div>
        </div>
    );
}
/* Ajout dans le dom des données*/
export default SkillsComponent