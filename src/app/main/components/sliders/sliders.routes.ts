import {Routes} from '@angular/router';

export const SLIDERS: Routes = [{
    path: 'sliders',
    loadChildren: 'src/app/main/components/sliders/sliders.module#SlidersModule'
}];
