import { Device } from "../../domain/device.entity";
import { DeviceRepository } from "../../infra/repository/deviceRepository";
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddDeviceUsecase {
  constructor(private readonly deviceRepository: DeviceRepository) {}

  async execute(deviceDto: any): Promise<Device> {
    
    const newDevice = new Device(deviceDto.id, deviceDto.name, deviceDto.type, deviceDto.status);
    return await this.deviceRepository.addDevice(newDevice);
  }
}
