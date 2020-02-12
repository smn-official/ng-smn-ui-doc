import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTablesComponent } from './data-tables.component';

export const DATA_TABLES: Routes = [
    {
        path: 'data-tables',
        loadChildren: () => import('./data-tables.module').then(m => m.DataTablesModule)
    }
];

const routes: Routes = [
    {path: '', component: DataTablesComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataTablesRoutingModule { }
