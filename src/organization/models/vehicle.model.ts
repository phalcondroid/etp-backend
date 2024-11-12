import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { Organization } from './organization.model';

@Table({ underscored: true, tableName: "vehicle" })
export class Vehicle extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  @ForeignKey(() => Organization)
  organizationId: number;

  @Column
  brand: string;

  @Column
  plates: string;

  @Column
  status: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}