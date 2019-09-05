import {Routes} from '@angular/router';

export const LISTS: Routes = [{
    path: 'lists',
    loadChildren: 'src/app/main/components/list/list.module#ListModule'
}];
