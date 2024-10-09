import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { RequestLogin } from 'src/app/resource/models/RequestLogin';
import { AlertService } from 'src/app/resource/services/alert.service';
import { LoginService } from 'src/app/resource/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin;
  faCar = faCar;
  
  constructor(
    private loginService: LoginService, 
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin() :void {
    alert(this.requestLogin.login +""+this.requestLogin.password );
    this.loginService.doLogin(this.requestLogin).subscribe(data => {
      this.alertService.success("Login efetuado com sucesso","Sucesso");
      this.router.navigate(['dashboard'])
      alert(data);
    },
    (httpError) =>{
      this.alertService.error(httpError.error.message,"erro ao fazer login");
      console.log(httpError);
    });
  }
}

