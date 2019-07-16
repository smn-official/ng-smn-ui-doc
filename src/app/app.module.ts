import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {SMNUIModule, UiToolbarService} from 'ng-smn-ui';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RegionService} from './core/region.service';
import {FormsModule} from '@angular/forms';
import {CodeGitsComponent} from './core/code-gits/code-gits.component';
import { JsfiddleComponent } from './core/jsfiddle/jsfiddle.component';
import { ToolbarsComponent } from './main/components/toolbars/toolbars.component';
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
        JsfiddleComponent,
        ToolbarsComponent,
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
