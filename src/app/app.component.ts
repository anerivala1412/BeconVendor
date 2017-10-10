import { Component } from '@angular/core';
import { Platform,MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { OfferPage } from '../pages/offer/offer';
import { BeaconConfigPage } from '../pages/beacon-config/beacon-config';
import { SettingsPage } from '../pages/settings/settings';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = TabsPage;
  registerPage = RegisterPage;
  profilePage = ProfilePage;
  offerPage = OfferPage;
  beaconConfig = BeaconConfigPage;
  settingsPage = SettingsPage;

  constructor(platform: Platform, 
  statusBar: StatusBar, 
  splashScreen: SplashScreen,
 public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page){
    this.rootPage = page;
    this.menu.close();
  }  
}

