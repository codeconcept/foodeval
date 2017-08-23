import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ToolsProvider {

  constructor(public http: Http) {
    console.log('Hello ToolsProvider Provider');
  }

  displayInfo(what, where = '') {
      console.log(`************************************* ${what} ${where} *********************************`);
  }

  displayError(err, where) {
      console.log(`######################## ERREUR dans ${where} BEGIN #############################`);
      console.error(`error keys >>>>>>>>>>>>>>>>>>>>> ${Object.keys(err)}`);
      console.error(`error _body >>>>>>>>>>>>>>>>>>>>> ${err._body}`);
      console.error(`error stringified>>>>>>>>>>>>>>>>>>>>> ${JSON.stringify(err)}`);
      console.error(`message >>>>>>>>>>>>>>>>>>>>> ${err.message}`);
      console.log(`######################## ERREUR dans ${where} END #############################`);
  }



}
