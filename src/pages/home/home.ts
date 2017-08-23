import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result: BarcodeScanResult;
  error: string;
  BASE_URL = 'https://world.openfoodfacts.org/api/v0/product/';
  api_response;
  api_response_raw;

  constructor(public navCtrl: NavController, private bcs: BarcodeScanner, private http: Http) {

  }

  async scanBarcode() {
    try{
      const options: BarcodeScannerOptions = {
        prompt: 'Pointer votre caméra vers un code barre',
        torchOn: false
      };

      this.result = await this.bcs.scan(options);
      await this.bcs.scan(options);
    } catch(error) {
      console.error(error);
    }
  }

  getArticleByBarcode(code: string) {
    this.http
        .get(`${this.BASE_URL}${this.result.text}`)
        .map(res => res.json())
        .subscribe(data => this.displayResult(data), error => this.handleGetError(error));
  }

  displayResult(data) {
    this.api_response_raw = data;
    this.api_response = data;
  }

  handleGetError(error) {
    console.log(error);
    console.error(error.message);
  }

}