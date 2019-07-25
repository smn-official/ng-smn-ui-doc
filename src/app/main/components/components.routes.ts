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
import { PROGRESS } from './progress/progress.routes';
import { SELECTION_CONTROLS } from './selection-controls/selection-controls.routes';
import { SELECTS } from './selects/selects.routes';
import { SLIDERS } from './sliders/sliders.routes';
import { SMART_LIST } from './smart-list/smart-list.routes';
import { SNACKBAR } from './snackbar/snackbar.routes';
import { SUBHEADERS } from './subheaders/subheaders.routes';
import { TABS } from './tabs/tabs.routes';
import { TIME_PICKERS } from './time-pickers/time-pickers.routes';
import { TOOLBARS } from './toolbars/toolbars.routes';

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
    ...NAV_DRAWER,
    ...PROGRESS,
    ...SELECTION_CONTROLS,
    ...SELECTS,
    ...SLIDERS,
    ...SMART_LIST,
    ...SNACKBAR,
    ...SUBHEADERS,
    ...TABS,
    ...TIME_PICKERS,
    ...TOOLBARS
];
