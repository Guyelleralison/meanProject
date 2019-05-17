import { Component, Inject} from '@angular/core';
import {User} from '../app/user/user';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cinema';
  userConnected:boolean;
  user:User;
  public data:any=[];
  name:string;
 
    constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
      this.getFromLocal("user");
     }
	
    getFromLocal(key): void {
      console.log('recieved= key:' + key);
      this.data[key]= this.storage.get(key);
      if(this.data[key] != null){
        this.userConnected = true;
        this.user = this.data[key];
      }else this.userConnected = false;
      console.log(this.data);
    }

    deconnect(){
      this.storage.remove["user"];
      this.userConnected = false;
    }

 
 
    
}
