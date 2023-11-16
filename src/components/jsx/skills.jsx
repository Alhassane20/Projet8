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
export default SkillsComponent