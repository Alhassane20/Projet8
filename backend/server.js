const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Configuration du middleware CORS
app.use(cors({
  origin: 'http://localhost:3000',  // Autoriser les requêtes depuis ce domaine
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,  // Autoriser l'envoi des cookies
}));

// Configuration du middleware Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route pour gérer les requêtes d'envoi d'e-mails
app.post('/send-email', (req, res) => {
  const { nom, email, objet, message } = req.body;

  // Création du transporteur pour envoyer des e-mails
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'seyealhassane@gmail.com',
      pass: 'yicjkelfeenfgfoi',
    },
  });

  // Définition des options de l'e-mail
  const mailOptions = {
    from: email,
    to: 'seyealhassane@gmail.com',
    subject: objet,
    text: `Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Envoi de l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).json({ message: 'Email envoyé : ' + info.response });
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
