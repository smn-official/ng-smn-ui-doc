import {Routes} from '@angular/router';

export const DATA_TABLES: Routes = [{
    path: 'data-tables',
    loadChildren: 'src/app/main/components/data-tables/data-tables.module#DataTablesModule'
}];
