// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuración de Mailtrap
const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "54395466cdf9ef", // ← tu usuario de Mailtrap
    pass: "tu_contraseña_aquí" // ← tu contraseña de Mailtrap
  }
});

app.post('/enviar-invitacion', async (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: '"Luka App" <no-reply@luka.com>',
    to: email,
    subject: 'Invitación a Luka',
    text: 'Tu pareja quiere compartir una cuenta contigo en Luka.',
    html: '<h2>¡Hola!</h2><p>Tu pareja quiere compartir una cuenta contigo en <strong>Luka</strong>.</p>'
  };

  try {
    await transport.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al enviar el correo' });
  }
});

app.listen(3001, () => {
  console.log('Servidor corriendo en http://localhost:3001');
});
