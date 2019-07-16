import {Routes} from '@angular/router';

export const FLEX_CONTAINER: Routes = [{
    path: 'flex-container',
    loadChildren: 'src/app/main/components/flex-container/flex-container.module#FlexContainerModule'
}];
