import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete.component';

export const AUTOCOMPLETE: Routes = [
    {
        path: 'autocomplete',
        loadChildren: () => import('./autocomplete.module').then(m => m.AutocompleteModule)
    }
];

const routes: Routes = [{
    path: '', component: AutocompleteComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AutocompleteRoutingModule { }
