import {Routes} from '@angular/router';

export const AVATAR: Routes = [{
    path: 'avatar',
    loadChildren: 'src/app/main/components/avatar/avatar.module#AvatarModule'
}];
