import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { MAIN_ROUTES } from './main/main.routes';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'not-found', component: NotFoundComponent},
    ...MAIN_ROUTES,
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
