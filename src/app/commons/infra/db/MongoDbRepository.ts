import { Model, Document } from 'mongoose';
import { IRepository } from '../../application/repository/IRepository';

export class MongoDBRepository<T> implements IRepository<T> {
  constructor(private readonly model: Model<Document & T>) {}

  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async add(entity: T): Promise<T> {
    const newEntity = new this.model(entity);
    const result = await newEntity.save();
    return result;
  }

}
