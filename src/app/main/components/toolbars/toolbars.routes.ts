import {Routes} from '@angular/router';

export const TOOLBARS: Routes = [{
    path: 'toolbars',
    loadChildren: 'src/app/main/components/toolbars/toolbars.module#ToolbarsModule'
}];
