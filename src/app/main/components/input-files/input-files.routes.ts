import {Routes} from '@angular/router';

export const FILES: Routes = [{
    path: 'files',
    loadChildren: 'src/app/main/components/input-files/input-files.module#InputFilesModule'
}];
