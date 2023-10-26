import { Schema } from 'mongoose';

export const DeviceSchema = new Schema({
  id: String,
  name: String,
  type: String,
  status: String,
});
