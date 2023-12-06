import React, { useState } from 'react';
import axios from 'axios';
import '../style/modal.sass'
import {fermerModal} from '../../scripts'

function Modale() {
    const [formData, setFormData] = useState({
        lien: '',
        image: '',  // Correspond à 'images' dans votre modèle Mongoose
        titre: '',  // Correspond à 'titres' dans votre modèle Mongoose
        taches: '',
        langages: '',
        lienCode: '',  // Correspond à 'lienCode' dans votre modèle Mongoose
        contraintes: '',
        motDePasse: '',
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Soumission du formulaire");

        axios.post('http://localhost:3001/api/ajouterProjet', formData, {
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => {
  console.log('Projet ajouté avec succès :', response.data);
        // Vous pouvez effectuer d'autres actions ici (rafraîchir la liste, fermer la modale, etc.)
        fermerModal();
      })
      .catch(error => console.error('Erreur lors de l\'ajout du projet :', error));
  };

    return(
        <div id='modale'>
            <form id='formModal'onSubmit={handleSubmit}>
            <h4>Ajoutez un projet</h4>
                <input type='text' placeholder='Lien du projet' id='link' className='inputModal'onChange={handleChange} />
                <input type='text' placeholder='Lien image' id='linkPicture' className='inputModal'/>
                <input type='text' placeholder='Titre du projet' id='title' className='inputModal'/>
                <input type='text' placeholder='Tâches réalisées' id='tasks' className='inputModal'/>
                <input type='text' placeholder='Langages utilisées' id='langages' className='inputModal'/>
                <input type='text' placeholder='Lien du code' id='lienCode' className='inputModal'/>
                <input type='text' placeholder='Contraintes rencontrées' id='Contraintes' className='inputModal'/>
                <input type='text' placeholder='Mot de passe' id='motDePasse' className='inputModal'/>
                <input type='submit' value={'Envoyer'} id='inputEnvoyer' />
                <i class="fa-solid fa-circle-xmark" onClick={() => fermerModal()}></i>
            </form>
        </div>
    )
}

export default Modale