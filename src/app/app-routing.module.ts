import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { MAIN_ROUTES } from './main/main.routes';

import {ButtonComponent} from './main/components/button/button.component';
import {CardComponent} from './main/components/card/card.component';
import {FabComponent} from './main/components/fab/fab.component';
import {InputComponent} from './main/components/input/input.component';
import {AutocompleteComponent} from './main/components/autocomplete/autocomplete.component';
import {BottomSheetsComponent} from './main/components/bottom-sheets/bottom-sheets.component';
import {ChipsComponent} from './main/components/chips/chips.component';
import {ClockComponent} from './main/components/clock/clock.component';
import {ColorPickersComponent} from './main/components/color-pickers/color-pickers.component';
import {DataTablesComponent} from './main/components/data-tables/data-tables.component';
import {AvatarComponent} from './main/components/avatar/avatar.component';
import {ToolbarsComponent} from './main/components/toolbars/toolbars.component';
import { DialogsComponent } from './main/components/dialogs/dialogs.component';
import { DividersComponent } from './main/components/dividers/dividers.component';
import { InfiniteLoadComponent } from './main/components/infinite-load/infinite-load.component';
import { FlexContainerComponent } from './main/components/flex-container/flex-container.component';
import { InputFilesComponent } from './main/components/input-files/input-files.component';
import { ListComponent } from './main/components/list/list.component';
import { NavDrawerComponent } from './main/components/nav-drawer/nav-drawer.component';
import { ProgressComponent } from './main/components/progress/progress.component';
import { SelectionControlsComponent } from './main/components/selection-controls/selection-controls.component';
import { SelectsComponent } from './main/components/selects/selects.component';
import { SlidersComponent } from './main/components/sliders/sliders.component';
import { SmartListComponent } from './main/components/smart-list/smart-list.component';
import { SnackbarComponent } from './main/components/snackbar/snackbar.component';
import { SubheadersComponent } from './main/components/subheaders/subheaders.component';
import { TabsComponent } from './main/components/tabs/tabs.component';
import { TimePickersComponent } from './main/components/time-pickers/time-pickers.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'not-found', component: NotFoundComponent},
    ...MAIN_ROUTES
    // {path: 'button', component: ButtonComponent},
    // {path: 'card', component: CardComponent},
    // {path: 'fab', component: FabComponent},
    // {path: 'inputs', component: InputComponent},
    // {path: 'files', component: InputFilesComponent},
    // {path: 'infinite-load', component: InfiniteLoadComponent},
    // {path: 'autocomplete', component: AutocompleteComponent},
    // {path: 'chips', component: ChipsComponent},
    // {path: 'clock', component: ClockComponent},
    // {path: 'color-pickers', component: ColorPickersComponent},
    // {path: 'data-tables', component: DataTablesComponent},
    // {path: 'dialogs', component: DialogsComponent},
    // {path: 'dividers', component: DividersComponent},
    // {path: 'flex-container', component: FlexContainerComponent},
    // {path: 'lists', component: ListComponent},
    // {path: 'navigation-drawer', component: NavDrawerComponent},
    // {path: 'progress', component: ProgressComponent},
    // {path: 'selects', component: SelectsComponent},
    // {path: 'selection-controls', component: SelectionControlsComponent},
    // {path: 'sliders', component: SlidersComponent},
    // {path: 'smart-list', component: SmartListComponent},
    // {path: 'snackbars', component: SnackbarComponent},
    // {path: 'subheaders', component: SubheadersComponent},
    // {path: 'tabs', component: TabsComponent},
    // {path: 'time-pickers', component: TimePickersComponent},
    // {path: 'toolbars', component: ToolbarsComponent},
    // {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
