import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  }

  public changeLanguage(): void {
    this._translateLanguage();
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
