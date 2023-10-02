import { Device } from "../../domain/device.entity";
import { Injectable,Inject } from '@nestjs/common';
import { IDeviceRepository } from "../repository/IDeviceRepository";

@Injectable()
export class GetDevicesUsecase {
    constructor(@Inject('IDeviceRepository') private readonly deviceRepository: IDeviceRepository) {}

  async execute(): Promise<Device[]> {
    return await this.deviceRepository.getDevices();
  }
}
