export interface IRepository<T> {
    findAll(): Promise<T[]>;
    add(entity: T): Promise<T>;
  }
  