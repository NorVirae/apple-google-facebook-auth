import './App.css';
// import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';

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

  const responseErrorGoogle = (response) => {
    console.log(response)
  }

  const responseSuccessGoogle = (response) => {
    console.log(response)
  }

  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
          scope: ''
        });
     };
     gapi.load('client:auth2', initClient);
 });

  let clientId = '797487001003-i1l0v8f95g0nbqbqqcdah9bse3pkubtc.apps.googleusercontent.com'
  return (
    <div className="App">
      Login with Google

      <div id="g_id_onload"
         data-client_id={clientId}
         data-callback={e => responseSuccessGoogle(e)}>
          holal
    </div>
    <div className="g_id_signin" data-type="standard"></div>

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
