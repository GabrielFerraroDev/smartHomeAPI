import { envConfig } from './config/envConfig';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceRepository } from './device/infra/repository/deviceRepository';
import { DeviceResource } from './device/infra/resources/deviceResource';
import { DeviceSchema } from './device/infra/schema/device.schema';
import { GetDevicesUsecase } from './device/application/usecases/get';
import { AddDeviceUsecase } from './device/application/usecases/add';




@Module({
  imports: [
    MongooseModule.forRoot(envConfig.mongoUri),
    MongooseModule.forFeature([{ name: 'Device', schema: DeviceSchema }])
  ],
  controllers: [DeviceResource],
  providers: [AddDeviceUsecase, GetDevicesUsecase,DeviceRepository],
})
export class AppModule {}
