require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'DoManage REST API: running' });
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected: MongoDB');
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB Error: DB connection failed:', err.message);
    process.exit(1);
  });
  
