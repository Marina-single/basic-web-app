
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
    pass: 'boke ixxw zbmi qpdm'
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'marysprt6@gmail.com',
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



/*const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const response = await axios.post('https://b24-ufen3t.bitrix24.de/rest/1/k2samoxnuzackjst/crm.lead.add.json', {
      fields: {
        TITLE: "Заявка с сайта",
        NAME: name,
        EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
        PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
        COMMENTS: message
      },
      params: { REGISTER_SONET_EVENT: "Y" }
    });

    res.json({ message: 'Данные успешно отправлены в Bitrix', result: response.data });
  } catch (error) {
    console.error('Ошибка при отправке в Bitrix:', error.response?.data || error.message);
    res.status(500).json({ error: 'Ошибка при отправке в Bitrix' });
  }
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
*/