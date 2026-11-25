require('dotenv').config();
const mongoose = require('mongoose');
const ServiceRecord = require('./ServiceRecord');

const sampleRecords = [
  {
    tenantName: 'Nelvim Omingod',
    roomNumber: 'Room 101',
    serviceType: 'Rent',
    amount: 3500,
    dueDate: new Date('2026-11-10'),
    status: 'Pending',
    notes: 'November monthly bedspace rent',
  },
  {
    tenantName: 'Claire Marie Siksi',
    roomNumber: 'Room 102',
    serviceType: 'Electricity',
    amount: 812.5,
    dueDate: new Date('2026-11-22'),
    status: 'Pending',
    previousReading: 1420,
    currentReading: 1485,
    notes: '65 kWh @ 12.50/kWh',
  },
  {
    tenantName: 'Rizzalino Joselino',
    roomNumber: 'Room 103',
    serviceType: 'Water Delivery',
    amount: 70,
    dueDate: new Date('2026-11-19'),
    status: 'Pending',
    quantity: 2,
    notes: '2 purified 5-gallon jugs',
  },
  {
    tenantName: 'Gab Kanlurang Silang',
    roomNumber: 'Room 201',
    serviceType: 'Water Bill',
    amount: 250,
    dueDate: new Date('2026-11-15'),
    status: 'Paid',
    notes: 'Shared floor water meter share',
  },
  {
    tenantName: 'Andrea Bonifacio',
    roomNumber: 'Room 202',
    serviceType: 'Rent',
    amount: 4000,
    dueDate: new Date('2026-11-25'),
    status: 'Paid',
    notes: 'Solo room monthly rent',
  },
  {
    tenantName: 'Sakania Aqina',
    roomNumber: 'Room 203',
    serviceType: 'Electricity',
    amount: 625,
    dueDate: new Date('2026-11-12'),
    status: 'Pending',
    previousReading: 980,
    currentReading: 1030,
    notes: '50 kWh @ 12.50/kWh',
  },
  {
    tenantName: 'Antonia Sol',
    roomNumber: 'Room 204',
    serviceType: 'Water Delivery',
    amount: 35,
    dueDate: new Date('2026-11-18'),
    status: 'Processing',
    quantity: 1,
    notes: '1 slim gallon refill',
  },
  {
    tenantName: 'Haponario Binibini ',
    roomNumber: 'Room 301',
    serviceType: 'Water Bill',
    amount: 250,
    dueDate: new Date('2026-11-20'),
    status: 'Pending',
    notes: 'November utility share',
  },
  {
    tenantName: 'Emilio S. Prizzinto',
    roomNumber: 'Room 302',
    serviceType: 'Rent',
    amount: 3500,
    dueDate: new Date('2026-11-28'),
    status: 'Pending',
    notes: 'November rent',
  },
  {
    tenantName: 'Tearsya Magbago',
    roomNumber: 'Room 303',
    serviceType: 'Water Delivery',
    amount: 105,
    dueDate: new Date('2026-11-17'),
    status: 'Completed',
    quantity: 3,
    notes: 'Delivered to 3rd floor hallway',
  },
  {
    tenantName: 'INS DEL PILLAR',
    roomNumber: 'Room 304',
    serviceType: 'Electricity',
    amount: 950,
    dueDate: new Date('2026-11-24'),
    status: 'Paid',
    previousReading: 2100,
    currentReading: 2176,
    notes: '76 kWh @ 12.50/kWh',
  },
  {
    tenantName: 'Disky Prisky',
    roomNumber: 'Room 104',
    serviceType: 'Water Bill',
    amount: 250,
    dueDate: new Date('2026-11-14'),
    status: 'Pending',
    notes: 'November water share',
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await ServiceRecord.deleteMany({});
    await ServiceRecord.insertMany(sampleRecords);
    process.exit(0);
  } catch (err) {
    process.exit(1);
  }
}

seedDB();
