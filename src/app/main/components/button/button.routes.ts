import {Routes} from '@angular/router';

export const BUTTONS: Routes = [{
    path: 'button',
    loadChildren: 'src/app/main/components/button/button.module#ButtonModule'
}];
