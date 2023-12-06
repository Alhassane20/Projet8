const http = require('http');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = require('./app');

const PORT = process.env.PORT || 3001;

const cors = require('cors');
app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { nom, email, objet, message } = req.body;

  // Créer un transporteur pour envoyer des emails
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'seyealhassane@gmail.com',
      pass: 'yicjkelfeenfgfoi', // Remplacez par votre mot de passe d'application
    },
  });
  

  // Définir les options de l'email
  const mailOptions = {
    from: email,
    to: 'seyealhassane@gmail.com',
    subject: objet,
    text: `Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Envoyer l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).json({ message: 'Email envoyé : ' + info.response });
  });
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
