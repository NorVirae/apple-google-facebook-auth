import './App.css';

import ""
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
