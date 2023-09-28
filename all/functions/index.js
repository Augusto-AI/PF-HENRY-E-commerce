const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

const sgMail = require('@sendgrid/mail');




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
