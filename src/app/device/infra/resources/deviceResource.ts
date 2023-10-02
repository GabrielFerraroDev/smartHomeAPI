import { Controller, Get, Post, Body } from '@nestjs/common';
import { AddDeviceUsecase } from '../../application/usecases/add';
import { GetDevicesUsecase } from '../../application/usecases/get';

@Controller('device')
export class DeviceResource {
  constructor(
    private readonly addDeviceUsecase: AddDeviceUsecase,
    private readonly getDevicesUsecase: GetDevicesUsecase
  ) {}

  @Get()
  getDevices() {
    return this.getDevicesUsecase.execute();
  }

  @Post()
  addDevice(@Body() deviceDto: any) {
    return this.addDeviceUsecase.execute(deviceDto);
  }
}