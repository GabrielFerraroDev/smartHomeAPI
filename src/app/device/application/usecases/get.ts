import { Device } from "../../domain/device.entity";
import { DeviceRepository } from "../../infra/repository/deviceRepository";
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetDevicesUsecase {
  constructor(private readonly deviceRepository: DeviceRepository) {}

  async execute(): Promise<Device[]> {
    return await this.deviceRepository.getDevices();
  }
}
