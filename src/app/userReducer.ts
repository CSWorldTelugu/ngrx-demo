import { createReducer,on} from "@ngrx/store";

import { updateMobile,updateEmail,updateName } from "./actions";

let initialState = {
  name: '',
  email: '',
  mobile: null,
};

 export  const  userReducer= createReducer(initialState,
  on(updateName,(state,{name})=> ({...state,name:name}) ),
  on(updateEmail,(state,{email})=> ({...state,email:email}) ),
  on(updateMobile,(state,{mobile})=> ({...state,mobile:mobile}) ),
  
  )





