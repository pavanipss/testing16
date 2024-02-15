const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ContactSchema = require('./models/Contact'); // You need to define this Mongoose model
//require('dotenv').config();
const username = encodeURIComponent("srisrifirms");
const password = encodeURIComponent("srisrifirms");
const clusterUrl = "primarycluster.05mtali.mongodb.net";
const dbName = "myFirstDatabase";
console.log(process.env.MONGODB_URI);
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const MONGODB_URI = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// API endpoint to receive contact form data
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, phone, email } = req.body;

    // Check if a record already exists with the same firstName, lastName, phone, and email
    const existingContact = await ContactSchema.findOne({ firstName, lastName, phone, email });

    if (existingContact) {
      // If it exists, send a 409 conflict response
      return res.status(409).send('User data already submitted, Please ensure to give the details accordingly');
    }

    // If not, save the new contact
    const contactData = new ContactSchema(req.body);
    await contactData.save();
    res.status(200).send('Contact data saved successfully');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
