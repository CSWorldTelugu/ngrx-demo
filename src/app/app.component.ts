import { Component} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  user;
 constructor(private store:Store<any>){

   store.select('user').subscribe(
    data=>{
      this.user= data;
    }
   )


 }







}


