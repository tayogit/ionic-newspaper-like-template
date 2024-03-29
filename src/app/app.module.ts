import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParkListPage } from '../pages/park-list/park-list';
import { ParkMapPage } from '../pages/park-map/park-map';
import { TabsPage } from '../pages/tabs/tabs';
import { ParkDetailsPage } from '../pages/park-details/park-details';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    ParkListPage,
    ParkMapPage,
    ParkDetailsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ParkListPage,
    ParkMapPage,
    ParkDetailsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
