import { Routes } from '@angular/router';

import { AUTOCOMPLETE } from './autocomplete/autocomplete.routing.module';
import { AVATAR } from './avatar/avatar.routing.module';
import { BOTTOM_SHEETS } from './bottom-sheets/bottom-sheets-routing.module';
import { BUTTONS } from './button/button-routing.module';
import { CARDS } from './card/card-routing.module';
import { CHIPS } from './chips/chips-routing.module';
import { CLOCK } from './clock/clock-routing.module';
import { COLOR_PICKERS } from './color-pickers/color-pickers-routing.module';
import { DATA_TABLES } from './data-tables/data-tables-routing.module';
import { DIALOGS } from './dialogs/dialogs-routing.module';
import { DIVIDERS } from './dividers/dividers-routing.module';
import { FAB } from './fab/fab-routing.module';
import { FLEX_CONTAINER } from './flex-container/flex-container-routing.module';
import { INFINITE_LOAD } from './infinite-load/infinite-load-routing.module';
import { INPUTS } from './input/input-routing.module';
import { FILES } from './input-files/input-files-routing.module';
import { LISTS } from './list/list-routing.module';
import { NAV_DRAWER } from './nav-drawer/nav-drawer-routing.module';
import { PROGRESS } from './progress/progress-routing.module';
import { SELECTION_CONTROLS } from './selection-controls/selection-controls-routing.module';
import { SELECTS } from './selects/selects-routing.module';
import { SLIDERS } from './sliders/sliders-routing.module';
import { SMART_LIST } from './smart-list/smart-list-routing.module';
import { SNACKBAR } from './snackbar/snackbar-routing.module';
import { SUBHEADERS } from './subheaders/subheaders-routing.module';
import { TABS_PAGE } from './tabs-page/tabs-page-routing.module';
import { TIME_PICKERS } from './time-pickers/time-pickers-routing.module';
import { TOOLBARS } from './toolbars/toolbars-routing.module';
import { TABS } from './tabs/tabs-routing.module';

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
    ...TABS_PAGE,
    ...TABS,
    ...TIME_PICKERS,
    ...TOOLBARS
];
