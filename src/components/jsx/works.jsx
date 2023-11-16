import React from 'react';
import { Link } from 'react-router-dom';
import worksDatas from '../data/works.json'
import '../style/works.sass'

function ProjetsComponents() {
    return (
        <div id='worksBlock'>
            {worksDatas.map(({ lien, image, titre, taches }, index) => (
                <Projets key={index} lien={lien} image={image} titre={titre} taches={taches} />
            ))}
        </div>
    );
}

function Projets({ lien, image, titre, taches }) {
    return (
        <div id="projets">
            <div id="works">
                <div className="work">
                    <Link to={lien} className='Block1'>
                        <img src={image} alt={titre} />
                        <h2 className='titreProjet'>
                            {titre}
                        </h2>
                    </Link>
                    <div className='Block2'>
                        <ul>
                            {taches.map((tache, index) => (
                                <li key={index}>{tache}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjetsComponents