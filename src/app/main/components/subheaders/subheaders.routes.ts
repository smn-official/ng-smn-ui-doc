import {Routes} from '@angular/router';

export const SUBHEADERS: Routes = [{
    path: 'subheaders',
    loadChildren: 'src/app/main/components/subheaders/subheaders.module#SubheadersModule'
}];
