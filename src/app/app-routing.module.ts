import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ButtonComponent} from './components/button/button.component';
import {CardComponent} from './components/card/card.component';
import {FabComponent} from './components/fab/fab.component';
import {InputComponent} from './components/input/input.component';
import {AutocompleteComponent} from './components/autocomplete/autocomplete.component';
import {BottomSheetsComponent} from './components/bottom-sheets/bottom-sheets.component';
import {ChipsComponent} from './components/chips/chips.component';
import {ClockComponent} from './components/clock/clock.component';
import {ColorPickersComponent} from './components/color-pickers/color-pickers.component';
import {DataTablesComponent} from './components/data-tables/data-tables.component';
import {AvatarComponent} from './components/avatar/avatar.component';
import {ToolbarsComponent} from './components/toolbars/toolbars.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { DividersComponent } from './components/dividers/dividers.component';
import { InfiniteLoadComponent } from './components/infinite-load/infinite-load.component';
import { FlexContainerComponent } from './components/flex-container/flex-container.component';
import { InputFilesComponent } from './components/input-files/input-files.component';
import { ListComponent } from './components/list/list.component';
import { NavDrawerComponent } from './components/nav-drawer/nav-drawer.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SelectionControlsComponent } from './components/selection-controls/selection-controls.component';
import { SelectsComponent } from './components/selects/selects.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { SmartListComponent } from './components/smart-list/smart-list.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SubheadersComponent } from './components/subheaders/subheaders.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'avatar', component: AvatarComponent},
    {path: 'button', component: ButtonComponent},
    {path: 'card', component: CardComponent},
    {path: 'fab', component: FabComponent},
    {path: 'inputs', component: InputComponent},
    {path: 'files', component: InputFilesComponent},
    {path: 'infinite-load', component: InfiniteLoadComponent},
    {path: 'autocomplete', component: AutocompleteComponent},
    {path: 'bottom-sheets', component: BottomSheetsComponent},
    {path: 'chips', component: ChipsComponent},
    {path: 'clock', component: ClockComponent},
    {path: 'color-pickers', component: ColorPickersComponent},
    {path: 'data-tables', component: DataTablesComponent},
    {path: 'dialogs', component: DialogsComponent},
    {path: 'dividers', component: DividersComponent},
    {path: 'flex-container', component: FlexContainerComponent},
    {path: 'lists', component: ListComponent},
    {path: 'navigation-drawer', component: NavDrawerComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'selects', component: SelectsComponent},
    {path: 'selection-controls', component: SelectionControlsComponent},
    {path: 'sliders', component: SlidersComponent},
    {path: 'smart-list', component: SmartListComponent},
    {path: 'snackbars', component: SnackbarComponent},
    {path: 'subheaders', component: SubheadersComponent},
    {path: 'toolbars', component: ToolbarsComponent},
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
