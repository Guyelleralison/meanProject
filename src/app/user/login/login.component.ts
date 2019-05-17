import { Component, OnInit, Input, Inject } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {User} from '../user';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loading = false;
  @Input()user:User;
  email:string;
  password:string;
  public data:any=[];

  constructor(private authService: AuthService, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
  }

  onKeyEmail(event: any) {
    this.email = event.target.value;
  }

  onKeyPassword(event: any) {
    this.password = event.target.value;
  }

  Login() {
    this.loading = true;
    console.log(this.email);
    this.authService.login(this.email,this.password)
        .subscribe(res => {
            //this.loading = false;
            this.user = res;
            console.log(res);
            this.saveInLocal("user",this.user);
            //...
        }, err => {
            //this.loading = false;
            console.log(err);
            //...
        });
  }

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key]= this.storage.get(key);
   }

}
