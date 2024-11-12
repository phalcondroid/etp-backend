import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { Organization } from 'src/organization/models/organization.model';
import { Station } from 'src/organization/models/station.model';
import { Vehicle } from 'src/organization/models/vehicle.model';

@Table({ underscored: true, tableName: "emergency" })
export class Emergency extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  @ForeignKey(() => Organization)
  organizationId: number;

  @Column
  @ForeignKey(() => Vehicle)
  vehicleId: number;

  @Column
  @ForeignKey(() => Station)
  stationId: number;

  @Column
  startDatetime: Date;

  @Column
  finishDatetime: Date;

  @Column
  status: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

}