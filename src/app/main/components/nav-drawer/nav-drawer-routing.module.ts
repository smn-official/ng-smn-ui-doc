import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavDrawerComponent } from './nav-drawer.component';

export const NAV_DRAWER: Routes = [
    {
        path: 'navigation-drawer',
        loadChildren: () => import('./nav-drawer.module').then(m => m.NavDrawerModule)
    }
];

const routes: Routes = [
    {path: '', component: NavDrawerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavDrawerRoutingModule { }
