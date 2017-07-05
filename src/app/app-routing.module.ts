import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ButtonComponent} from './components/button/button.component';
import {CardComponent} from './components/card/card.component';
import {FabComponent} from './components/fab/fab.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'button', component: ButtonComponent},
    {path: 'card', component: CardComponent},
    {path: 'fab', component: FabComponent},
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
