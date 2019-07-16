import {Routes} from '@angular/router';

export const CLOCK: Routes = [{
    path: 'clock',
    loadChildren: 'src/app/main/components/clock/clock.module#ClockModule'
}];
