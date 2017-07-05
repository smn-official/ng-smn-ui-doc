import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {SMNUIModule, UiToolbarService} from 'ng-smn-ui';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ButtonComponent} from './components/button/button.component';
import {CardComponent} from './components/card/card.component';
import {FabComponent} from './components/fab/fab.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        ButtonComponent,
        CardComponent,
        FabComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SMNUIModule
    ],
    providers: [UiToolbarService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
