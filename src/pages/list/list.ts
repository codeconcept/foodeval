import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  flo: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afd: AngularFireDatabase) {
    this.flo = this.afd.list('/food-articles');
  }

  showDetails(item) {
    // this.navCtrl.push(DetailsPage, { 'itemId': item._id});
  }
}
