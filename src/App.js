import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
function App() {

  function handleCallbackResponse(res) {
    console.log(res.credential);
    
  }

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: "1065578323385-6ukalkhhqs2il0drjb46dbknj3tfos1q.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )
  }, [])

  return (
    <div id='signInDiv'>
    </div>
  );
}

export default App;
