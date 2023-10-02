import { Device } from "../../domain/device.entity";


export interface IDeviceRepository {
    getDevices(): Promise<Device[]>;
    addDevice(device: Device): Promise<Device>;
}
