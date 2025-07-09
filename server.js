// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
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
    console.error("❌ Error al enviar correo:", error);
    res.status(500).json({ success: false, message: 'Error al enviar el correo' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
