import {Routes} from '@angular/router';

export const TABS: Routes = [{
    path: 'tabs',
    loadChildren: 'src/app/main/components/tabs/tabs.module#TabsModule'
}];
