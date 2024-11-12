import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({ underscored: true, modelName: "trafficlight" })
export class Trafficlight extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number;

  @Column
  name: string;

  @Column
  lat: number;

  @Column
  lng: number;

  @Column
  address: string;

  @Column
  district: string;

  @Column
  neighborhood: string;

  @Column
  status: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}