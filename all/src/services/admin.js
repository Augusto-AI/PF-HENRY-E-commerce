const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./path-to-your-service-account-key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pf-gafas-default-rtdb.firebaseio.com", // Replace with your database URL
});

module.exports = admin;
