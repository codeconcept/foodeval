import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  article$: FirebaseObjectObservable<any>;
  retrievedArticle;
  errorMessage = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private afd: AngularFireDatabase) {
    const key = this.navParams.get('key');
    this.article$ = this.afd.object(`/food-articles/${key}`);
    this.article$.subscribe(data => this.retrievedArticle = data, err => this.errorMessage = err.message);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
