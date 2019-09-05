import {Routes} from '@angular/router';

export const PROGRESS: Routes = [{
    path: 'progress',
    loadChildren: 'src/app/main/components/progress/progress.module#ProgressModule'
}];
