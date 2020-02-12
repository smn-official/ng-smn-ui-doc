import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneComponent } from './phone.component';

export const PHONE: Routes = [
    {
        path: 'masks/phone',
        loadChildren: () => import('./phone.module').then(m => m.PhoneModule)
    }
];

const routes: Routes = [
    {path: '', component: PhoneComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhoneRoutingModule { }
