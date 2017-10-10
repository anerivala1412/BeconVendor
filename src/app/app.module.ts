import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { SuperTabsModule } from 'ionic2-super-tabs';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from '../pages/register/register';

import { ProfilePage } from '../pages/profile/profile';
import { OfferPage } from '../pages/offer/offer';
import { BeaconConfigPage } from '../pages/beacon-config/beacon-config';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    RegisterPage,
    ProfilePage,
    OfferPage,
    BeaconConfigPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    //SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    RegisterPage,
    ProfilePage,
    OfferPage,
    BeaconConfigPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
