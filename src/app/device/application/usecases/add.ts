import { Device } from "../../domain/device.entity";
import { Injectable,Inject } from '@nestjs/common';
import { IDeviceRepository } from "../repository/IDeviceRepository";

@Injectable()
export class AddDeviceUsecase {
    constructor(@Inject('IDeviceRepository') private readonly deviceRepository: IDeviceRepository) {}

  async execute(deviceDto: any): Promise<Device> {
    
    const newDevice = new Device(deviceDto.id, deviceDto.name, deviceDto.type, deviceDto.status);
    return await this.deviceRepository.addDevice(newDevice);
  }
}
