import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class CreatedUpdatedModel {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
