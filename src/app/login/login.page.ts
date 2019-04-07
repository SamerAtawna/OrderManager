import { LoginService } from './login.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { parseWebDriverCommand } from 'blocking-proxy/built/lib/webdriver_commands';
import { NavController, AlertController } from '@ionic/angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('username') uname;
  @ViewChild('password') pwd;

  constructor(private nav: NavController, private msg: AlertController, private loginService: LoginService) {
  }

  ngOnInit() {
  }
 async  showError() {
    const alert = await this.msg.create({
      header: 'Alert',
      message: 'Invalid credintials.',
      buttons: ['OK']
    });
    await alert.present();
}


  signIn() {
    let validateCred = this.loginService.isValid(this.uname.value, this.pwd.value);
    if  ( validateCred === undefined){
        this.showError();
    }
    else {
      this.nav.navigateForward('/menu');
    }
  }

}
