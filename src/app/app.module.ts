import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';

import {SMNUIModule, UiToolbarService} from 'ng-smn-ui';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ButtonComponent} from './components/button/button.component';
import {CardComponent} from './components/card/card.component';
import {FabComponent} from './components/fab/fab.component';
import {InputComponent} from './components/input/input.component';
import {RegionService} from './core/region.service';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import {FormsModule} from '@angular/forms';
import {CodeGitsComponent} from './core/code-gits/code-gits.component';
import { BottomSheetsComponent } from './components/bottom-sheets/bottom-sheets.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ClockComponent } from './components/clock/clock.component';
import { ColorPickersComponent } from './components/color-pickers/color-pickers.component';
import { DataTablesComponent } from './components/data-tables/data-tables.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { JsfiddleComponent } from './core/jsfiddle/jsfiddle.component';
import { ToolbarsComponent } from './components/toolbars/toolbars.component';
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

@NgModule({
    declarations: [
        CodeGitsComponent,
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        ButtonComponent,
        CardComponent,
        FabComponent,
        InputComponent,
        AutocompleteComponent,
        BottomSheetsComponent,
        ChipsComponent,
        ClockComponent,
        ColorPickersComponent,
        DataTablesComponent,
        AvatarComponent,
        JsfiddleComponent,
        ToolbarsComponent,
        DialogsComponent,
        DividersComponent,
        InfiniteLoadComponent,
        FlexContainerComponent,
        InputFilesComponent,
        ListComponent,
        NavDrawerComponent,
        ProgressComponent,
        SelectionControlsComponent,
        SelectsComponent,
        SlidersComponent,
        SmartListComponent,
        SnackbarComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FormsModule,
        SMNUIModule,
    ],
    providers: [UiToolbarService, RegionService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
