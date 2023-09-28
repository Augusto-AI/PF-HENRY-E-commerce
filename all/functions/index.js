const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');




admin.initializeApp();


exports.lowercaseProductName = functions.firestore.document('/products/{documentId}')
    .onCreate((snap, context) => {
        const name = snap.data().name;

        functions.logger.log('Lowercasing product name', context.params.documentId, name);

        const lowercaseName = name.toLowerCase();

        return snap.ref.update({ name_lower: lowercaseName });
    });



    // sgMail.setApiKey('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');

    // exports.sendConfirmationEmail = functions.https.onCall(async (data, context) => {
    //   const { userEmail } = data;
    
    //   const msg = {
    //     to: userEmail,
    //     from:  'startvideogame11@gmail.com',
    //     subject: "Confirmación de Pago Exitoso",
    //     text: "Tu pago ha sido procesado con éxito. Gracias por tu compra.",
    //   };
    
    //   try {
    //     await sgMail.send(msg);
    //     return { success: true };
    //   } catch (error) {
    //     console.error("Error al enviar el correo electrónico de confirmación:", error);
    //     return { success: false, error: error.message };
    //   }
    // });