import {Routes} from '@angular/router';

export const TABS_PAGE: Routes = [{
    path: 'tabs-page',
    loadChildren: 'src/app/main/components/tabs-page/tabs-page.module#TabsPageModule'
}];
