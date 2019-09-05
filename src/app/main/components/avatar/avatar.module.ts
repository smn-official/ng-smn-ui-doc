import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AvatarComponent } from './avatar.component';
import { AvatarRoutingModule } from './avatar.routing.module';

@NgModule({
  declarations: [AvatarComponent],
  imports: [
    SharedModule,
    AvatarRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvatarModule { }
