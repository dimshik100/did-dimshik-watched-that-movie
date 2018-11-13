import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ActorInfoComponent } from './actor/actor-info';

@NgModule({
  declarations: [
    ActorInfoComponent
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ActorInfoComponent
  ]
})
export class ComponentsModule { }
