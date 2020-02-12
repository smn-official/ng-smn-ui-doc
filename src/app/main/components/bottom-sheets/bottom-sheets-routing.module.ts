import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BottomSheetsComponent } from './bottom-sheets.component';

export const BOTTOM_SHEETS: Routes = [
    {
        path: 'bottom-sheets',
        loadChildren: () => import('./bottom-sheets.module').then(m => m.BottomSheetsModule)
    }
];

const routes: Routes = [
    {path: '', component: BottomSheetsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BottomSheetsRoutingModule { }
