import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginService:LoginService , private router:Router,public toastController: ToastController) { }

  ngOnInit() {
  }
  username:string;
  password:string;
  async login(form) {
    this.loginService.login(form.value).subscribe(async (res) =>{
      this.router.navigateByUrl('home');
      const toast = await this.toastController.create({
        color: 'dark',
        duration: 2000,
        message: '<ion-icon name="checkmark-outline"></ion-icon> Login successful.',
      });
      await toast.present();
    },async error=>{
      const toast = await this.toastController.create({
        color: 'dark',
        duration: 2000,
        message: '<ion-icon name="alert-outline"></ion-icon> Wrong Email or Password.',
      });
      await toast.present();
    }
    );
  }

}
