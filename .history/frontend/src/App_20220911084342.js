import './App.css';

import GoogleLogin from "react-google-login"

function App() {

  const responseErrorGoogle = (response) => {
    
  }
  return (
    <div className="App">
      Login with Google
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
