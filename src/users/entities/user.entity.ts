import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { CreatedUpdatedModel } from '../../database/entities/common/created-updated.model';

@Entity('user')
export class UserEntity extends CreatedUpdatedModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  surname: string;

  @Column({ default: null })
  is_active: boolean;

  @Column({ type: 'datetime', default: null })
  last_login: Date;
}
