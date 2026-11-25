export interface ServiceRecord {
  _id?: string;
  tenantName: string;
  roomNumber: string;
  serviceType: 'Rent' | 'Electricity' | 'Water Bill' | 'Water Delivery';
  amount: number;
  dueDate: string;
  status: 'Pending' | 'Paid' | 'Processing' | 'Completed';
  previousReading?: number;
  currentReading?: number;
  quantity?: number;
  notes?: string;
}
