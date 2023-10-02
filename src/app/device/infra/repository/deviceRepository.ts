import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Device } from '../../domain/device.entity';
import { DeviceDocument } from '../schema/device.schema';
import { IDeviceRepository } from '../../application/repository/IDeviceRepository';
import { MongoDBRepository } from '../../../commons/infra/db/MongoDbRepository';

@Injectable()
export class DeviceRepository implements IDeviceRepository {
  private readonly repository: MongoDBRepository<Device>;

  constructor(@InjectModel('Device') private readonly deviceModel: Model<DeviceDocument>) {
    this.repository = new MongoDBRepository<Device>(this.deviceModel);
  }

  async getDevices(): Promise<Device[]> {
    return this.repository.findAll();
  }

  async addDevice(device: Device): Promise<Device> {
    return this.repository.add(device);
  }
}
