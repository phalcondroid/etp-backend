import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { Organization } from './organization.model';

@Table({ underscored: true, tableName: "user" })
export class User extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number;

  @Column
  name: string;

  @Column
  identification: string;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  status: number;

  @Column({ field: "organization_id" })
  @ForeignKey(() => Organization)
  organizationId: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}