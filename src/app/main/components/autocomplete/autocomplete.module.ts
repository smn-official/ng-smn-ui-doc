import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AutocompleteComponent } from './autocomplete.component';
import { AutocompleteRoutingModule } from './autocomplete.routing.module';

@NgModule({
    declarations: [AutocompleteComponent],
    imports: [
        AutocompleteRoutingModule,
        SharedModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AutocompleteModule { }
