import {Routes} from '@angular/router';

export const NAV_DRAWER: Routes = [{
    path: 'navigation-drawer',
    loadChildren: 'src/app/main/components/nav-drawer/nav-drawer.module#NavDrawerModule'
}];
