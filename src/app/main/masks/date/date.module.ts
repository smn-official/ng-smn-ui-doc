import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { DateRoutingModule } from './date-routing.module';
import { DateComponent } from './date.component';


@NgModule({
    declarations: [DateComponent],
    imports: [
        SharedModule,
        DateRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DateModule { }
