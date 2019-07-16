import { Routes } from '@angular/router';

import { AUTOCOMPLETE } from './autocomplete/autocomplete.routes';
import { AVATAR } from './avatar/avatar.routes';
import { BOTTOM_SHEETS } from './bottom-sheets/bottom-sheets.routes';
import { BUTTONS } from './button/button.routes';
import { CARDS } from './card/card.routes';
import { CHIPS } from './chips/chips.routes';
import { CLOCK } from './clock/clock.routes';
import { COLOR_PICKERS } from './color-pickers/color-pickers.routes';
import { DATA_TABLES } from './data-tables/data-tables.routes';
import { DIALOGS } from './dialogs/dialogs.routes';
import { DIVIDERS } from './dividers/dividers.routes';
import { FAB } from './fab/fab.routes';
import { FLEX_CONTAINER } from './flex-container/flex-container.routes';
import { INFINITE_LOAD } from './infinite-load/infinite-load.routes';
import { INPUTS } from './input/input.routes';
import { FILES } from './input-files/input-files.routes';
import { LISTS } from './list/list.routes';
import { NAV_DRAWER } from './nav-drawer/nav-drawer.routes';

export const COMPONENTS_ROUTES: Routes = [
    ...AUTOCOMPLETE,
    ...AVATAR,
    ...BOTTOM_SHEETS,
    ...BUTTONS,
    ...CARDS,
    ...CHIPS,
    ...CLOCK,
    ...COLOR_PICKERS,
    ...DATA_TABLES,
    ...DIALOGS,
    ...DIVIDERS,
    ...FAB,
    ...FLEX_CONTAINER,
    ...INFINITE_LOAD,
    ...INPUTS,
    ...FILES,
    ...LISTS,
    ...NAV_DRAWER
];
