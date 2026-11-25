const mongoose = require('mongoose');

const serviceRecordSchema = new mongoose.Schema(
  {
    tenantName: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    roomNumber: {
      type: String,
      required: [true, 'Room # is required'],
      trim: true,
    },
    serviceType: {
      type: String,
      required: [true, 'Service type is required'],
      enum: ['Rent', 'Electricity', 'Water Bill', 'Water Delivery'],
    },
    amount: {
      type: Number,
      required: [true, 'Amount is required'],
      min: [0, 'Amount cannot be negative'],
    },
    dueDate: {
      type: Date,
      required: [true, 'Due or request date is required'],
    },
    status: {
      type: String,
      required: true,
      enum: ['Pending', 'Paid', 'Processing', 'Completed'],
      default: 'Pending',
    },
    previousReading: {
      type: Number,
      min: 0,
    },
    currentReading: {
      type: Number,
      min: 0,
    },
    quantity: {
      type: Number,
      min: 1,
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('ServiceRecord', serviceRecordSchema);
