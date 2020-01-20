import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SMNUIModule, UiToolbarService } from 'ng-smn-ui';
import { PrismModule } from '@ngx-prism/core';
import 'prismjs';
import 'prismjs/components/prism-scss.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-bash.min';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegionService } from './core/region.service';
import { FormsModule } from '@angular/forms';
import { JsfiddleComponent } from './core/jsfiddle/jsfiddle.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        JsfiddleComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FormsModule,
        SMNUIModule,
        BrowserAnimationsModule,
        PrismModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        HttpClientModule
    ],
    providers: [UiToolbarService, RegionService, HttpClient],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
