import React from "react";
import {Button} from '@material-ui/core';
import './Login.css';
import {auth,provider} from './firebase';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';

function Login() {

const [state,dispatch]=useStateValue();
	
const signIn = () =>{
	  
	auth.signInWithPopup(provider)
	    .then((result)=>{
		dispatch({
		type:actionTypes.SET_USER,
		user:result.user,
		})
	    })
	    .catch((error)=>{
		alert(error.message);
	    });
 }
	
  return (
    <div className="login">
	 <div className="login_container">
	 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/100px-WhatsApp.svg.png" alt="whatsapp_logo"/>
	 <div className="login_text">
	 <h1>Sign In to WhatsApp</h1>
	 </div>
	 <Button onClick={signIn}>Sign In with Google</Button>
	 </div>
    </div>
  );
}

export default Login;