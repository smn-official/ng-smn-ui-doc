import { Routes } from '@angular/router';

import { COMPONENTS_ROUTES } from './components/components.routes';
import { MASKS_ROUTES } from './masks/masks.routes';

export const MAIN_ROUTES: Routes = [
    ...COMPONENTS_ROUTES,
    ...MASKS_ROUTES
];
