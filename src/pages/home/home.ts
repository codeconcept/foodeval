import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result: BarcodeScanResult;

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner) {

  }

  async scanBarcode() {
    try{
      const options: BarcodeScannerOptions = {
        prompt: 'Pointer votre caméra vers un code barre',
        torchOn: false
      };

      this.result = await this.barcode.scan(options);

      await this.barcode.scan(options);
    } catch(error) {
      console.error(error);
    }
  }

}