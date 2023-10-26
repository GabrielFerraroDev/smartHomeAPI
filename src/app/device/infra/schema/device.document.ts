import { Document } from 'mongoose';

export interface DeviceDocument extends Document {
  id: string;
  name: string;
  type: string;
  status: string;
}
