import './App.css';
// import { GoogleLogin } from 'react-google-login';
import { isExpired, decodeToken } from "react-jwt";
import FacebookLogin from "react-facebook-login"
import { useEffect } from 'react';

import axios from "axios"

function App() {
  
//   window.gapi.load('client:auth2', () => {
//     window.gapi.client.init({
//     clientId: '797487001003-i1l0v8f95g0nbqbqqcdah9bse3pkubtc.apps.googleusercontent.com',
//     plugin_name: "chat"
// })
// })

// window.gapi.load('auth2', function() {
//   let auth2 = window.gapi.auth2.init({
//     client_id: '797487001003-i1l0v8f95g0nbqbqqcdah9bse3pkubtc.apps.googleusercontent.com',
    // Scopes to request in addition to 'profile' and 'email'
    //scope: 'additional_scope'
//   });

//   console.log(auth2)
// });

  const responseFacebook = (response) => {
    console.log(response)
  }

  const decodeJwtResponse = (credential) => {
    var decoded = decodeToken(credential);
    return decoded
  }

  const handleCredentialResponse = async (response) => {
    const responsePayload = decodeJwtResponse(response.credential);

     console.log("ID: " + responsePayload.sub);
     console.log('Full Name: ' + responsePayload.name);
     console.log('Given Name: ' + responsePayload.given_name);
     console.log('Family Name: ' + responsePayload.family_name);
     console.log("Image URL: " + responsePayload.picture);
     console.log("Email: " + responsePayload.email);

    console.log(response)

    const rez = await axios({
      method: 'post',
      url: '/auth/login',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    });

    
    console.log(rez, "HOLE")
    return rez // parses JSON response into native JavaScript objects
  }

  useEffect(() => {
    window.handleCredentialResponse = handleCredentialResponse;
   
 });

  let clientId = '797487001003-i1l0v8f95g0nbqbqqcdah9bse3pkubtc.apps.googleusercontent.com'
  return (
    <div className="App">
      Login with Google

      <div id="g_id_onload"
         data-client_id={clientId}
         data-callback={"handleCredentialResponse"}
         
         >

          holal
    </div>
    <div className="g_id_signin" data-text="Google" data-type="standard"></div>

    <FacebookLogin
    appId="5366383623483875"
    autoLoad={true}
    fields="name,email,picture"
    onClick={console.log("clicked")}
    callback={responseFacebook} />

    {/* <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
      /> */}
    </div>
  );
}

export default App;
