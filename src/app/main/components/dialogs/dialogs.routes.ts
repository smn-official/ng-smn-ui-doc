import {Routes} from '@angular/router';

export const DIALOGS: Routes = [{
    path: 'dialogs',
    loadChildren: 'src/app/main/components/dialogs/dialogs.module#DialogsModule'
}];
