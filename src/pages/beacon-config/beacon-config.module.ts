import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeaconConfigPage } from './beacon-config';

@NgModule({
  declarations: [
    BeaconConfigPage,
  ],
  imports: [
    IonicPageModule.forChild(BeaconConfigPage),
  ],
})
export class BeaconConfigPageModule {}
