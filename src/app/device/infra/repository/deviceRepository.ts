import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Device } from '../../domain/device.entity';
import { DeviceDocument } from '../schema/device.schema';


@Injectable()
export class DeviceRepository {
  constructor(
    @InjectModel('Device') private readonly deviceModel: Model<DeviceDocument>
  ) {}

  async getDevices(): Promise<Device[]> {
    const devices = await this.deviceModel.find().exec();
    return devices.map(device => new Device(device.id, device.name, device.type, device.status));
  }

  async addDevice(device: Device): Promise<Device> {
    const newDevice = new this.deviceModel(device);
    const result = await newDevice.save();
    return new Device(result.id, result.name, result.type, result.status);
  }
}
