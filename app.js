const express = require('express');
const bodyParser = require('body-parser');
const Mailjet = require('node-mailjet');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

const mailjet = Mailjet.apiConnect(process.env.MAILJET_APIKEY, process.env.MAILJET_SECRETKEY);

app.post('/send-email', (req, res) => {
  const { phone, text,name,email } = req.body;

  const request = mailjet
    .post("send", { 'version': 'v3.1' })
    .request({
      "Messages": [
        {
          "From": {
            "Email": 'kamaucoder@gmail.com',
            "Name": 'Mike'
          },
          "To": [
            {
              "Email": 'Remayaorganisation@gmail.com',
              "Name": "REMAYA ORG"
            }
          ],
          "Subject": 'Contact from REMAYA ORG Website',
          "TextPart": `Message from website from ${name} email address ${email} phone number ${phone} : ${text}`
        }
      ]
    });

  request
    .then((result) => {
      res.status(200).json({ status: 'success', data: result.body });
    })
    .catch((err) => {
      res.status(500).json({ status: 'error', error: err.message });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});