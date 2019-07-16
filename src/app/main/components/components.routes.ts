import { Routes } from '@angular/router';

import { AUTOCOMPLETE } from './autocomplete/autocomplete.routes';
import { AVATAR } from './avatar/avatar.routes';
import { BOTTOM_SHEETS } from './bottom-sheets/bottom-sheets.routes';

export const COMPONENTS_ROUTES: Routes = [
    ...AUTOCOMPLETE,
    ...AVATAR,
    ...BOTTOM_SHEETS
];
