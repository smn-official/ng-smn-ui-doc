import {Routes} from '@angular/router';

export const SMART_LIST: Routes = [{
    path: 'smart-list',
    loadChildren: 'src/app/main/components/smart-list/smart-list.module#SmartListModule'
}];
