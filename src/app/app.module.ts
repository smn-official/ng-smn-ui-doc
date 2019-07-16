import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {SMNUIModule, UiToolbarService} from 'ng-smn-ui';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ButtonComponent} from './main/components/button/button.component';
import {CardComponent} from './main/components/card/card.component';
import {FabComponent} from './main/components/fab/fab.component';
import {InputComponent} from './main/components/input/input.component';
import {RegionService} from './core/region.service';
import {FormsModule} from '@angular/forms';
import {CodeGitsComponent} from './core/code-gits/code-gits.component';
import { ChipsComponent } from './main/components/chips/chips.component';
import { ClockComponent } from './main/components/clock/clock.component';
import { ColorPickersComponent } from './main/components/color-pickers/color-pickers.component';
import { DataTablesComponent } from './main/components/data-tables/data-tables.component';
import { JsfiddleComponent } from './core/jsfiddle/jsfiddle.component';
import { ToolbarsComponent } from './main/components/toolbars/toolbars.component';
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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SubheadersComponent } from './main/components/subheaders/subheaders.component';
import { TabsComponent } from './main/components/tabs/tabs.component';
import { TimePickersComponent } from './main/components/time-pickers/time-pickers.component';

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
        ChipsComponent,
        ClockComponent,
        ColorPickersComponent,
        DataTablesComponent,
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
        SnackbarComponent,
        SubheadersComponent,
        TabsComponent,
        TimePickersComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FormsModule,
        SMNUIModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [UiToolbarService, RegionService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
