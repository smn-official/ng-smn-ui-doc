import {Routes} from '@angular/router';

export const AUTOCOMPLETE: Routes = [{
    path: 'autocomplete',
    loadChildren: 'src/app/main/components/autocomplete/autocomplete.module#AutocompleteModule'
}];
