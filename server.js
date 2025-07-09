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
  subject: 'Tu pareja te ha invitado a unirte a Luka 💙',
  text: 'Tu pareja quiere compartir una cuenta contigo en Luka. Regístrate en: https://lukaweb.netlify.app/registro.html',
  html: `
    <div style="font-family: 'Poppins', sans-serif; color: #333; padding: 20px; max-width: 600px; margin: auto;">
      <h2 style="color: #27355F;">¡Te han invitado a Luka! 💙</h2>
      <p style="font-size: 16px;">
        Tu pareja quiere que formen un equipo financiero juntos en <strong>Luka</strong>, la app que los ayuda a ahorrar, organizarse y alcanzar metas comunes.
      </p>
      <p style="font-size: 16px;">Haz clic en el botón de abajo para crear tu cuenta y empezar a compartir finanzas de forma inteligente:</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://lukaweb.netlify.app/registro.html" 
           style="background-color: #27355F; color: white; text-decoration: none; padding: 12px 24px; border-radius: 5px; font-weight: bold;">
           Crear mi cuenta en Luka
        </a>
      </div>
      
      <p style="font-size: 14px; color: #666;">Si el botón no funciona, copia y pega este enlace en tu navegador:</p>
      <p style="font-size: 14px;"><a href="https://lukaweb.netlify.app/registro.html">https://lukaweb.netlify.app/registro.html</a></p>
    </div>
  `
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
