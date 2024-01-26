import { DynamicModule, Module, Type } from '@nestjs/common';
import { AlarmFactory } from './domain/factories/alarm.factory';
import { AlarmsController } from '../alarms/presenters/http/alarms.controller';
import { AlarmsService } from './application/alarms.service';
import { CreateAlarmCommandHandler } from './application/commands/create-alarm.command-handler';
import { GetAlarmsQueryHandler } from './application/queries/get-alarms.query-handler';
import { AlarmCreatedEventHandler } from './application/handlers/alarm-created.event-handler';
import { AcknowledgeAlarmCommandHandler } from './application/commands/acknowledge-alarm.command-handler';
import { AlarmAcknowledgedEventHandler } from './application/handlers/alarm-acknowledged.event-handler';
import { CascadingAlarmsSaga } from './application/sagas/cascading-alarms.saga';
import { NotifyFacilitySupervisorCommandHandler } from './application/commands/notify-facility-supervisor.command-handler';
import { UnacknowledgedAlarmsSaga } from './application/sagas/unacknowledged-alarms.saga';

@Module({
  controllers: [AlarmsController],
  providers: [
    AlarmsService,
    AlarmFactory,
    CreateAlarmCommandHandler,
    GetAlarmsQueryHandler,
    AlarmCreatedEventHandler,
    AcknowledgeAlarmCommandHandler,
    AlarmAcknowledgedEventHandler,
    CascadingAlarmsSaga,
    NotifyFacilitySupervisorCommandHandler,
    UnacknowledgedAlarmsSaga,
  ],
})
export class AlarmsModule {
  static withInfrastucture(infrastructureModule: Type | DynamicModule) {
    return {
      module: AlarmsModule,
      imports: [infrastructureModule],
    };
  }
}
