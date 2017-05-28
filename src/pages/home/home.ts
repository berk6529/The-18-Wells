import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TheBiblePage } from "./the-bible/the-bible";
import { HolySpiritPage } from "./holy-spirit/holy-spirit";
import { HouseOfGodPage } from "./house-of-god/house-of-god";
import { ManOfGodPage } from "./man-of-god/man-of-god";
import { DivineHealthPage } from "./divine-health/divine-health";
import { MarriageConvenantPage } from "./marriage-covenant/marriage-covenant";
import { HouseholdPage } from "./household/household";
import { DivineSupplyPage } from "./divine-supply/divine-supply";
import { EyesOfUnderstandingPage } from "./eyes-of-understanding/eyes-of-understanding";
import { MinistryPage } from "./ministry/ministry";
import { RelationshipsInGodPage } from "./relationships-in-god/relationships-in-god";
import { CanopyOfSafetyPage } from "./canopy-of-safety/canopy-of-safety";
import { WorshipAndPraisePage } from "./worship-and-praise/worship-and-praise";
import { TithingPage } from "./tithing/tithing";
import { SowingAndReapingPage } from "./sowing-and-reaping/sowing-and-reaping";
import { PrayerLifePage } from "./prayer-life/prayer-life";
import { MeditationPage } from "./meditation/meditation";
import { AltersOfGodPage } from "./alters-of-god/alters-of-god";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public wells: string[] = ["The Bible", "Holy Spirit", "House of God", "Man of God", "Divine Health",
    "Marriage Convenant", "Household", "Divine Supply", "Eyes of Understanding", "Ministry",
    "Relationships in God", "Canopy of Safety", "Worship and Praise", "Tithing", "Sowing and Reaping",
    "Prayer Life", "Meditation", "Alters of God"];

  constructor(public navCtrl: NavController) {

  }

  public routeWellSelected(well: string) {
    switch (well) {
      case "The Bible":
        this.navCtrl.push(TheBiblePage);
        break;
      case "holy Spirit":
        this.navCtrl.push(HolySpiritPage);
        break;
      case "House of God":
        this.navCtrl.push(HouseOfGodPage);
        break;
      case "Man of God":
        this.navCtrl.push(ManOfGodPage);
        break;
      case "Divine Health":
        this.navCtrl.push(DivineHealthPage);
        break;
      case "Marriage Covenant":
        this.navCtrl.push(MarriageConvenantPage);
        break;
      case "Household":
        this.navCtrl.push(HouseholdPage);
        break;
      case "Divine Supply":
        this.navCtrl.push(DivineSupplyPage);
        break;
      case "Eyes of Understanding":
        this.navCtrl.push(EyesOfUnderstandingPage);
        break;
      case "Ministry":
        this.navCtrl.push(MinistryPage);
        break;
      case "Relationships in God":
        this.navCtrl.push(RelationshipsInGodPage);
        break;
      case "Canopy of Safety":
        this.navCtrl.push(CanopyOfSafetyPage);
        break;
      case "Worship and Praise":
        this.navCtrl.push(WorshipAndPraisePage);
        break;
      case "Tithing":
        this.navCtrl.push(TithingPage);
        break;
      case "Sowing and Reaping":
        this.navCtrl.push(SowingAndReapingPage);
        break;
      case "Prayer Life":
        this.navCtrl.push(PrayerLifePage);
        break;
      case "Meditation":
        this.navCtrl.push(MeditationPage);
        break;
      case "Alters of God":
        this.navCtrl.push(AltersOfGodPage);
        break;
    }
  }

}
