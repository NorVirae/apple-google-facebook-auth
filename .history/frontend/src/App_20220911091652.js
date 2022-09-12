import './App.css';

import GoogleLogin from "react-google-login"

function App() {
  
  window.gapi.load('client:auth2', () => {
    window.gapi.client.init({
    clientId: '797487001003-i1l0v8f95g0nbqbqqcdah9bse3pkubtc.apps.googleusercontent.com',
    plugin_name: "chat"
})
})

window.gapi.load('auth2', function() {
  auth2 = gapi.auth2.init({
    client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
    // Scopes to request in addition to 'profile' and 'email'
    //scope: 'additional_scope'
  });
});

  const responseErrorGoogle = (response) => {
    console.log(response)
  }

  const responseSuccessGoogle = (response) => {
    console.log(response)
  }
  return (
    <div className="App">
      Login with Google
      <GoogleLogin
        clientId="797487001003-i1l0v8f95g0nbqbqqcdah9bse3pkubtc.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
