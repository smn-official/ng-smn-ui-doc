import {Routes} from '@angular/router';

export const PHONE: Routes = [{
    path: 'masks/phone',
    loadChildren: 'src/app/main/masks/phone/phone.module#PhoneModule'
}];
