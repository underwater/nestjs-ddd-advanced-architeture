import { FindAlarmsRepository } from 'src/alarms/application/ports/find-alarms.repositoy';
import { Module } from '@nestjs/common';

import { InMemoryAlarmRepository } from './repositories/alarm.repository';
import { UpsertMaterializedAlarmRepository } from 'src/alarms/application/ports/upsert-materialized-alarm.repository';
import { CreateAlarmRepository } from 'src/alarms/application/ports/create-alarm.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: CreateAlarmRepository,
      useClass: InMemoryAlarmRepository,
    },
    {
      provide: FindAlarmsRepository,
      useClass: InMemoryAlarmRepository,
    },
    {
      provide: UpsertMaterializedAlarmRepository,
      useClass: InMemoryAlarmRepository,
    },
  ],
  exports: [
    CreateAlarmRepository,
    FindAlarmsRepository,
    UpsertMaterializedAlarmRepository,
  ],
})
export class InMemoryAlarmPersistenceModule {}
