import React from 'react';
import { Link } from 'react-router-dom';
import worksDatas from '../data/works.json'
import '../style/works.sass'

function ProjetsComponents() {
    return (
        <div id='worksBlock'>
            {worksDatas.map(({ lien, image, titre, taches, langages, lienCode, contraintes }, index) => (
                <Projets key={index} lien={lien} image={image} titre={titre} taches={taches} langages={langages} lienCode={lienCode} contraintes={contraintes} />
            ))}
        </div>
    );
}
/* Ajout dynamique de chaque données des projets a partir du json*/

function Projets({ lien, image, titre, taches, langages, lienCode, contraintes }) {
    return (
        <div id="projets">
            <div id="works">
                <div className="work">
                    <Link to={lien} className='Block1' target="_blank">
                        <img src={image} alt={titre} />
                        <h2 className='titreProjet'>
                            {titre}
                        </h2>
                    </Link>
                    <div className='Block2'>
                        <div id='taches'>                   
                            {taches.map((tache, index) => (
                                <p key={index}>{tache}</p>
                            ))}
                        </div>   

                        <div>
                                <p id='technologies'><strong>Technologies utilisées</strong> : {langages}</p>
                                <Link to={lienCode} id='liencode' target="_blank"><strong>Code du projet</strong></Link>
                                <p id='contraintes'><strong>Contraintes</strong> : {contraintes}</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}/* Ajout des données dans le dom*/

export default ProjetsComponents