import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <h1 className="text-9xl font-bold text-yellow-400">Logged In !</h1>
        <button onClick={() => logout()}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-9xl font-bold text-yellow-400">Hello World!</h1>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    );
  }
}

export default App;
