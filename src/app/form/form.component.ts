import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { updateEmail,updateMobile,updateName } from '../actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private store:Store<any>){}


  editName(input){
    console.log(updateName({name:input.value}))
    this.store.dispatch(updateName({name:input.value}))
    input.value=""
  }
  editEmail(input){

    this.store.dispatch(updateEmail({email:input.value}))
    input.value=""
  }
  editMobile(input){

    this.store.dispatch(updateMobile({mobile:+input.value}))
    input.value=""
  }

}


