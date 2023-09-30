// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// const nodemailer = require("nodemailer");




// admin.initializeApp();

// const app = express();

// app.use(cors({ origin: true }));

// app.post('/sendMail', async (req, res) => {
//   try {
//     const { email, subject, text } = req.body;

//     if (!email || !subject || !text) {
//       return res.status(400).json({ error });
//     }

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'startvideogame11@gmail.com',
//         pass: 'zstv spcv pzco rqff',
//       },
//     });

//     const htmlContent = `
//       <div style="background-color: purple; padding: 20px; text-align: center; border-radius: 15px;">
//         <p style="color: white; font-size: 20px; margin: 0;">${text}</p>
//       </div>
//     `;

//     const mailOptions = {
//       from: 'startvideogame11@gmail.com',
//       to: email,
//       subject,
//       html: htmlContent,
//     };

//     const info = await transporter.sendMail(mailOptions);

//     console.log('Email sent:', info.response);
//     return res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

   // exports.api = functions.https.onRequest(app);

//    const functions = require("firebase-functions");
//    const admin = require("firebase-admin");
   
   
//    admin.initializeApp();
//    //  const app = express();
//    // Nodemailer para enviar correos
//    const nodemailer = require('nodemailer');
//    let transporter = nodemailer.createTransport({
//        service: 'gmail',
//        auth: {
//            user: 'startvideogame11@gmail.com',
//            pass: 'ifukzvtkgpguscyt',          //ifuk zvtk gpgu scyt
//        }
//    });
   
//    exports.enviarCorreo = functions.firestore
//        .document('orders/{orderId}')
//        .onCreate((snap, context) => {
//            const mailOptions = {
//                from: 'startvideogame11@gmail.com',
//                to: 'daniellopg@hotmail.com',
//                subject: 'Detalles de pago',
//                html: `<p>Se ha creado un nuevo documento en orders con los siguientes datos:</p>
//                       <p>${JSON.stringify(snap.data())}</p>`
//            };
//            return transporter.sendMail(mailOptions, (error, data) => {
//                if (error) {
//                    console.log(error);
//                    return;
//                }
//                console.log("Correo enviado correctamente");
//            });
//        });
   
       // exports.api = functions.https.onRequest(app);


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
    <h1>Detalles de la orden</h1>
    <p>Fecha: ${new Date(orderData.date._seconds * 1000).toLocaleString()}</p>
    <p>Activo: ${orderData.isActive ? 'Sí' : 'No'}</p>
    <p>Marca del producto: ${orderData.product[0].brand}</p>
    <p>Descripción del producto: ${orderData.product[0].description}</p>
    <img src="${orderData.product[0].image}" alt="Producto" />
    <p>Tamaño seleccionado: ${orderData.product[0].selectedSize}</p>
    <p>Cantidad: ${orderData.product[0].quantity}</p>
    <p>Precio: $${orderData.product[0].price}</p>
    <p>Total: $${orderData.total}</p>
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
                           subject: 'Detalles de pago',
                           html: `<p>Se ha creado un nuevo documento en orders con los siguientes datos:</p>
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
        //    <p>${JSON.stringify(orderData)}</p>`