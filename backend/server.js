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

app.get('/api/records', async (req, res) => {
  try {
    const records = await ServiceRecord.find().sort({ dueDate: 1 });
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve records', error: error.message });
  }
});

app.get('/api/records/:id', async (req, res) => {
  try {
    const record = await ServiceRecord.findById(req.params.id);
    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ message: 'Invalid record ID', error: error.message });
  }
});

app.post('/api/records', async (req, res) => {
  try {
    const newRecord = new ServiceRecord(req.body);
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (error) {
    res.status(400).json({ message: 'Validation failed', error: error.message });
  }
});

app.put('/api/records/:id', async (req, res) => {
  try {
    const updatedRecord = await ServiceRecord.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(400).json({ message: 'Update failed', error: error.message });
  }
});

app.delete('/api/records/:id', async (req, res) => {
  try {
    const deletedRecord = await ServiceRecord.findByIdAndDelete(req.params.id);
    if (!deletedRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: 'Delete failed', error: error.message });
  }
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
a;
