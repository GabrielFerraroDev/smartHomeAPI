import { Schema, Document } from 'mongoose';

export const DeviceSchema = new Schema({
  id: String,
  name: String,
  type: String,
  status: String,
});

export interface DeviceDocument extends Document {
  id: string;
  name: string;
  type: string;
  status: string;
}
