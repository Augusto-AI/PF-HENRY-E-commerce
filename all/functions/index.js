const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

// import app from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';
// import 'firebase/compat/functions';
admin.initializeApp();

const app = express();

app.use(cors({ origin: true }));

app.post('/sendMail', async (req, res) => {
  try {
    const { email, subject, text } = req.body;

    if (!email || !subject || !text) {
      return res.status(400).json({ error });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'startvideogame11@gmail.com',
        pass: 'zstv spcv pzco rqff',
      },
    });

    const htmlContent = `
      <div style="background-color: purple; padding: 20px; text-align: center; border-radius: 15px;">
        <p style="color: white; font-size: 20px; margin: 0;">${text}</p>
      </div>
    `;

    const mailOptions = {
      from: 'startvideogame11@gmail.com',
      to: email,
      subject,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.response);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

exports.api = functions.https.onRequest(app);

// admin.initializeApp();

// Nodemailer para enviar correos
// const nodemailer = require('nodemailer');
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'startvideogame11@gmail.com',
//         pass: 'zstv spcv pzco rqff',
//     }
// });

// exports.enviarCorreo = functions.firestore
//     .document('orders/{orderId}')
//     .onCreate((snap, context) => {
//         const mailOptions = {
//             from: 'startvideogame11@gmail.com',
//             to: 'daniellopg@hotmail.com',
//             subject: 'Detalles de pao',
//             html: <><p>Se ha creado un nuevo documento en orders con los siguientes datos:</p>
//             <p>${JSON.stringify(snap.data())}</p></>
//         };
//         return transporter.sendMail(mailOptions, (error, data) => {
//             if (error) {
//                 console.log(error);
//                 return;
//             }
//             console.log("Correo enviado correctamente");
//         });
//     });

//     exports.api = functions.https.onRequest(app);
