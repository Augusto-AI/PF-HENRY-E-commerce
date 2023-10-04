const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'startvideogame11@gmail.com',
        pass: 'ifukzvtkgpguscyt', // Reemplaza con tu contraseña
    }
});

exports.enviarCorreo = functions.firestore
    .document('orders/{orderId}')
    .onCreate(async (snap, context) => {
        const orderId = context.params.orderId;
        const orderData = snap.data();
        const htmlTemplate = `
               <html>
                 <body>
                   <h1>Welcome to PF HENRY & CO. Optical Store!</h1>
                   <p>Date: ${new Date(orderData.date._seconds * 1000).toLocaleString()}</p>
                   <p>Active: ${orderData.isActive ? 'Yes' : 'No'}</p>
                 </body>
               </html>
               `;


        // Verifica si el documento de la orden tiene el campo "userId"
        if (orderData.userId) {
            try {
                // Obtiene el correo electrónico del usuario usando el ID del usuario en el documento de la orden
                const user = await admin.auth().getUser(orderData.userId);
                const userEmail = user.email;

                const mailOptions = {
                    from: 'startvideogame11@gmail.com',
                    to: userEmail, // Envía el correo al usuario
                    subject: 'Payment details',
                    html: `<p>A new document has been created in orders with the following data:</p>
                                <p>${htmlTemplate}</p>`
                };

                await transporter.sendMail(mailOptions);
                console.log("Correo enviado correctamente a", userEmail);
            } catch (error) {
                console.error("Error al enviar el correo:", error);
            }
        } else {
            console.log("El documento de orden no tiene un usuario asociado.");
        }
    });