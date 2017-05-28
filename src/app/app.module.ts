import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TheBiblePage } from '../pages/home/the-bible/the-bible';
import { HolySpiritPage } from "../pages/home/holy-spirit/holy-spirit";
import { HouseOfGodPage } from "../pages/home/house-of-god/house-of-god";
import { ManOfGodPage } from "../pages/home/man-of-god/man-of-god";
import { DivineHealthPage } from "../pages/home/divine-health/divine-health";
import { MarriageCovenantPage } from "../pages/home/marriage-covenant/marriage-covenant";
import { HouseholdPage } from "../pages/home/household/household";
import { DivineSupplyPage } from "../pages/home/divine-supply/divine-supply";
import { EyesOfUnderstandingPage } from "../pages/home/eyes-of-understanding/eyes-of-understanding";
import { MinistryPage } from "../pages/home/ministry/ministry";
import { RelationshipsInGodPage } from "../pages/home/relationships-in-god/relationships-in-god";
import { CanopyOfSafetyPage } from "../pages/home/canopy-of-safety/canopy-of-safety";
import { WorshipAndPraisePage } from "../pages/home/worship-and-praise/worship-and-praise";
import { TithingPage } from "../pages/home/tithing/tithing";
import { SowingAndReapingPage } from "../pages/home/sowing-and-reaping/sowing-and-reaping";
import { PrayerLifePage } from "../pages/home/prayer-life/prayer-life";
import { MeditationPage } from "../pages/home/meditation/meditation";
import { AltersOfGodPage } from "../pages/home/alters-of-god/alters-of-god";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TheBiblePage,
    HolySpiritPage,
    HouseOfGodPage,
    ManOfGodPage,
    DivineHealthPage,
    MarriageCovenantPage,
    HouseholdPage,
    DivineSupplyPage,
    EyesOfUnderstandingPage,
    MinistryPage,
    RelationshipsInGodPage,
    CanopyOfSafetyPage,
    WorshipAndPraisePage,
    TithingPage,
    SowingAndReapingPage,
    PrayerLifePage,
    MeditationPage,
    AltersOfGodPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TheBiblePage,
    HolySpiritPage,
    HouseOfGodPage,
    ManOfGodPage,
    DivineHealthPage,
    MarriageCovenantPage,
    HouseholdPage,
    DivineSupplyPage,
    EyesOfUnderstandingPage,
    MinistryPage,
    RelationshipsInGodPage,
    CanopyOfSafetyPage,
    WorshipAndPraisePage,
    TithingPage,
    SowingAndReapingPage,
    PrayerLifePage,
    MeditationPage,
    AltersOfGodPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
