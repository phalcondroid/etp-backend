import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({ underscored: true, tableName: "organization" })
export class Organization extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column({
    field: "id"
  })
  public id: number;

  @Column
  name: string;

  @Column
  hash: string;

  @Column
  mutant: number;

  @Column
  status: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

}