import '../style/formcontact.sass'
import React, { useState } from 'react';

function FormContact() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [objet, setObjet] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envoyer les données du formulaire au serveur
    const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom, email, objet, message }),
      });
      
      const result = await response.text();
      console.log(result);      
  };

  return (
    <form id="formulaireContact" onSubmit={handleSubmit}>
      <h3>Envoyez un mail</h3>
      <input type="text" placeholder="Nom" id="prenom" value={nom} onChange={(e) => setNom(e.target.value)} required />
      <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="Objet" id="objet" value={objet} onChange={(e) => setObjet(e.target.value)} required />
      <textarea
        name="message"
        placeholder="Votre message..."
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <input type="submit" value="Envoyer" id="bouton" />
    </form>
  );
}

export default FormContact;
