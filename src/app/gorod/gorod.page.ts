import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonAccordionGroup, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-gorod',
  templateUrl: './gorod.page.html',
  styleUrls: ['./gorod.page.scss'],
})
export class GorodPage implements OnInit {

  constructor(private _translate: TranslateService) {  }

  ngOnInit() {
    this.changeLanguage();
  }
  

  @ViewChild('accordionGroup', { static: true }) accordionGroup!: IonAccordionGroup;
  @ViewChild(IonContent) content!: IonContent;

  toggleAccordion = (param1:string) => {
    const nativeEl = this.accordionGroup;
    if (nativeEl.value === param1) {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = param1;
    }
  };

  public layout: string = "";
  public map: string = "";
  public prep_title: string = "";
  public prep_1: string = "";
  public prep_2: string = ""; 
  public prep_3: string = ""; 
  public prep_4: string = ""; 
  public prep_5: string = ""; 
  public ee_1: string = ""; 
  public ee_2: string = ""; 
  public ee_3: string = ""; 
  public ee_4: string = ""; 
  public ee_5: string = ""; 
  public ee_6: string = ""; 
  public ee_7: string = ""; 
  public ee_8: string = ""; 
  public ee_9: string = ""; 
  public ee_10: string = ""; 
  public ee_11: string = ""; 
  public ee_12: string = ""; 
  public trophy_1: string = ""; 
  public trophy_2: string = ""; 
  public trophy_3: string = ""; 
  public trophy_4: string = ""; 
  public trophy_5: string = ""; 
  public trophy_6: string = ""; 
  public input_1: string = ""; 
  public input_2: string = ""; 
  public green_valve:string = "0";
  public pink_valve:string = "0";
  public combination: string = "";
  public language: string = "en";

  _initialiseTranslation(): void {
    this._translate.get('layout').subscribe((res: string) => {
      this.layout = res;
    });
    this._translate.get('map').subscribe((res: string) => {
      this.map = res;
    });
    this._translate.get('prep_title', { value: 'John' }).subscribe((res: string) => {
      this.prep_title = res;
    });
    this._translate.get('prep_1', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.prep_1 = res;
    });
    this._translate.get('prep_2', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.prep_2 = res;
    });
    this._translate.get('prep_3', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.prep_3 = res;
    });
    this._translate.get('prep_4', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.prep_4 = res;
    });
    this._translate.get('prep_5', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.prep_5 = res;
    });
    this._translate.get('ee_1', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.ee_1 = res;
    });
    this._translate.get('ee_2', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.ee_2 = res;
    });
    this._translate.get('ee_3', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.ee_3 = res;
    });
    this._translate.get('ee_4', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.ee_4 = res;
    });
    this._translate.get('ee_5', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.ee_5 = res;
    });
    this._translate.get('ee_6', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.ee_6 = res;
    });
    this._translate.get('ee_7', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.ee_7 = res;
    });
    this._translate.get('ee_8', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.ee_8 = res;
    });
    this._translate.get('ee_9', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.ee_9 = res;
    });
    this._translate.get('input_1', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.input_1 = res;
    });
    this._translate.get('input_2', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.input_2 = res;
    });
    this._translate.get('ee_11', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.ee_11 = res;
    });
    this._translate.get('ee_12', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.ee_12 = res;
    });
    this._translate.get('trophy_1', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.trophy_1 = res;
    });
    this._translate.get('trophy_2', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.trophy_2 = res;
    });
    this._translate.get('trophy_3', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.trophy_3 = res;
    });
    this._translate.get('trophy_4', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.trophy_4 = res;
    });
    this._translate.get('trophy_5', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.trophy_5 = res;
    });
    this._translate.get('trophy_6', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      this.trophy_6 = res;
    });
  }


  scrollTo(_id: string) {
    this.toggleAccordion(_id);
    let y = document.getElementById(_id)!.offsetTop;
    this.content.scrollToPoint(0, y);
  }
  public changeLanguage(): void {
    this._translateLanguage();
  }

  public valveCombination(): void{
      if(this.green_valve == this.pink_valve){
        this.combination = "Invalid"
      }
      else if(this.green_valve == "2" && this.pink_valve == "1"){
        this.combination = "Dept. Store - 3<br>Supply Depot - 2<br>Tank - 2<br>Infirmary -2<br>Dragon Command - 3<br>Armory"
      }
      else if(this.green_valve == "3" && this.pink_valve == "1"){
        this.combination = "Dept. Store - 1<br>Supply Depot - 3<br>Tank - 1<br>Infirmary -1<br>Dragon Command - 1<br>Armory"
      }
      else if(this.green_valve == "4" && this.pink_valve == "1"){
        this.combination = "Dept. Store - 1<br>Supply Depot - 1<br>Tank - 2<br>Infirmary -2<br>Dragon Command - 2<br>Armory"
      }
      else if(this.green_valve == "5" && this.pink_valve == "1"){
        this.combination = "Dept. Store - 1<br>Supply Depot - 3<br>Tank - 1<br>Infirmary -3<br>Dragon Command - 2<br>Armory"
      }
      else if(this.green_valve == "6" && this.pink_valve == "1"){
        this.combination = "Dept. Store - 3<br>Supply Depot - 2<br>Tank - 1<br>Infirmary -1<br>Dragon Command - 1<br>Armory"
      }
      else if(this.green_valve == "1" && this.pink_valve == "2"){
        this.combination = "Armory - 1<br>Supply Depot - 3<br>Tank - 1<br>Infirmary -1<br>Dragon Command - 2<br>Dept. Store"
      }
      else if(this.green_valve == "3" && this.pink_valve == "2"){
        this.combination = "Armory - 2<br>Supply Depot - 2<br>Tank - 1<br>Infirmary -1<br>Dragon Command - 1<br>Dept. Store"
      }
      else if(this.green_valve == "4" && this.pink_valve == "2"){
        this.combination = "Armory - 3<br>Supply Depot - 3<br>Tank - 3<br>Infirmary -3<br>Dragon Command - 1<br>Dept. Store"
      }
      else if(this.green_valve == "5" && this.pink_valve == "2"){
        this.combination = "Armory - 2<br>Supply Depot - 2<br>Tank - 1<br>Infirmary -3<br>Dragon Command - 2<br>Dept. Store"
      }
      else if(this.green_valve == "6" && this.pink_valve == "2"){
        this.combination = "Armory - 3<br>Supply Depot - 2<br>Tank - 1<br>Infirmary -3<br>Dragon Command - 1<br>Dept. Store"
      }
      else if(this.green_valve == "1" && this.pink_valve == "3"){
        this.combination = "Armory - 3<br>Supply Depot - 1<br>Tank - 2<br>Infirmary -2<br>Dept. Store - 2<br>Dragon Command"
      }
      else if(this.green_valve == "2" && this.pink_valve == "3"){
        this.combination = "Armory - 1<br>Supply Depot - 1<br>Tank - 3<br>Infirmary -2<br>Dept. Store - 2<br>Dragon Command"
      }
      else if(this.green_valve == "4" && this.pink_valve == "3"){
        this.combination = "Armory - 2<br>Supply Depot - 2<br>Tank - 2<br>Infirmary -2<br>Dept. Store - 3<br>Dragon Command"
      }
      else if(this.green_valve == "5" && this.pink_valve == "3"){
        this.combination = "Armory - 3<br>Supply Depot - 3<br>Tank - 3<br>Infirmary -3<br>Dept. Store - 2<br>Dragon Command"
      }
      else if(this.green_valve == "6" && this.pink_valve == "3"){
        this.combination = "Armory - 1<br>Supply Depot - 1<br>Tank - 1<br>Infirmary -1<br>Dept. Store - 1<br>Dragon Command"
      }
      else if(this.green_valve == "1" && this.pink_valve == "4"){
        this.combination = "Armory - 2<br>Supply Depot - 1<br>Tank - 2<br>Dragon Command -2<br>Dept. Store - 2<br>Infirmary"
      }
      else if(this.green_valve == "2" && this.pink_valve == "4"){
        this.combination = "Armory - 2<br>Supply Depot - 1<br>Tank - 2<br>Dragon Command - 3<br>Dept. Store - 1<br>Infirmary"
      }
      else if(this.green_valve == "3" && this.pink_valve == "4"){
        this.combination = "Armory - 3<br>Supply Depot - 3<br>Tank - 3<br>Dragon Command - 1<br>Dept. Store - 2<br>Infirmary"
      }
      else if(this.green_valve == "5" && this.pink_valve == "4"){
        this.combination = "Armory - 3<br>Supply Depot - 3<br>Tank - 3<br>Dragon Command - 3<br>Dept. Store - 3<br>Infirmary"
      }
      else if(this.green_valve == "6" && this.pink_valve == "4"){
        this.combination = "Armory - 2<br>Supply Depot - 2<br>Tank - 2<br>Dragon Command - 3<br>Dept. Store - 3<br>Infirmary"
      }
      else if(this.green_valve == "1" && this.pink_valve == "5"){
        this.combination = "Armory - 2<br>Infirmary - 1<br>Tank - 1<br>Dragon Command - 1<br>Dept. Store - 3<br>Supply Depot"
      }
      else if(this.green_valve == "2" && this.pink_valve == "5"){
        this.combination = "Armory - 2<br>Infirmary - 3<br>Tank - 1<br>Dragon Command - 3<br>Dept. Store - 1<br>Supply Depot"
      }
      else if(this.green_valve == "3" && this.pink_valve == "5"){
        this.combination = "Armory - 1<br>Infirmary - 2<br>Tank - 3<br>Dragon Command - 2<br>Dept. Store - 2<br>Supply Depot"
      }
      else if(this.green_valve == "4" && this.pink_valve == "5"){
        this.combination = "Armory - 2<br>Infirmary - 3<br>Tank - 2<br>Dragon Command - 2<br>Dept. Store - 1<br>Supply Depot"
      }
      else if(this.green_valve == "6" && this.pink_valve == "5"){
        this.combination = "Armory - 1<br>Infirmary - 3<br>Tank - 1<br>Dragon Command - 2<br>Dept. Store - 1<br>Supply Depot"
      }
      else if(this.green_valve == "1" && this.pink_valve == "6"){
        this.combination = "Armory - 3<br>Infirmary - 3<br>Supply Depot - 3<br>Dragon Command - 1<br>Dept. Store - 2<br>Tank"
      }
      else if(this.green_valve == "2" && this.pink_valve == "6"){
        this.combination = "Armory - 2<br>Infirmary - 3<br>Supply Depot - 2<br>Dragon Command - 1<br>Dept. Store - 2<br>Tank"
      }
      else if(this.green_valve == "3" && this.pink_valve == "6"){
        this.combination = "Armory - 1<br>Infirmary - 1<br>Supply Depot - 3<br>Dragon Command - 3<br>Dept. Store - 1<br>Tank"
      }
      else if(this.green_valve == "4" && this.pink_valve == "6"){
        this.combination = "Armory - 1<br>Infirmary - 3<br>Supply Depot - 3<br>Dragon Command - 2<br>Dept. Store - 1<br>Tank"
      }
      else if(this.green_valve == "5" && this.pink_valve == "6"){
        this.combination = "Armory - 3<br>Infirmary - 2<br>Supply Depot - 2<br>Dragon Command - 3<br>Dept. Store - 3<br>Tank"
      }
  }

  _translateLanguage(): void {
    this._translate.use(this.language);
    this._initialiseTranslation();
  }

  _initTranslate(language: string) {
    // Set the default language for translation strings, and the current language.
    this._translate.setDefaultLang('en');
    if (language) {
      this.language = language;
    }
    else {
      // Set your language here
      this.language = 'en';
    }
    this._translateLanguage();
  }

}
