const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'marysprt6@gmail.com',
    pass: 'boke ixxw zbmi qpdm' // Используйте пароль приложения (App Password)
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'marysprt6@gmail.com', // Укажите ваш email
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Error sending email' });
    }
    res.json({ message: 'Email sent successfully' });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
