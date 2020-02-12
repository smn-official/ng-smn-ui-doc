import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarComponent } from './avatar.component';

export const AVATAR: Routes = [
    {
        path: 'avatar',
        loadChildren: () => import('./avatar.module').then(m => m.AvatarModule)
    }
];

const routes: Routes = [{
    path: '', component: AvatarComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AvatarRoutingModule { }
