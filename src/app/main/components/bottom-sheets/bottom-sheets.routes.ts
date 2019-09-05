import {Routes} from '@angular/router';

export const BOTTOM_SHEETS: Routes = [{
    path: 'bottom-sheets',
    loadChildren: 'src/app/main/components/bottom-sheets/bottom-sheets.module#BottomSheetsModule'
}];
