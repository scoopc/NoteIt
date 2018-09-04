import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {
  login: string;
  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.login = "Login";
    this.username = "My Name";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }

  closeAcctPage(){
    this.navCtrl.pop();
  }

  loginPage(){
    this.navCtrl.push(LoginPage);
  }
  

}
