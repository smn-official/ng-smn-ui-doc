import {Routes} from '@angular/router';

export const SELECTION_CONTROLS: Routes = [{
    path: 'selection-controls',
    loadChildren: 'src/app/main/components/selection-controls/selection-controls.module#SelectionControlsModule'
}];
