import {Routes} from '@angular/router';

export const SNACKBAR: Routes = [{
    path: 'snackbars',
    loadChildren: 'src/app/main/components/snackbar/snackbar.module#SnackbarModule'
}];
