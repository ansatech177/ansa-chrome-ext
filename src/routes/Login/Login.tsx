import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  signInWithCredential,
  browserLocalPersistence,
} from "firebase/auth";
import { app } from "../../firebase";
import { Header, LoginButton } from "../../components/styled-components";

import logo from "../../assets/logo.png";
import google from "../../assets/google.svg";

function Login() {
  const { push: navigate } = useHistory();

  const auth = getAuth(app);
  (async () => {
    await setPersistence(auth, browserLocalPersistence);
  })();

  const login = async () => {
    try {
      chrome.identity.getAuthToken({ interactive: true }, async (token) => {
        if (chrome.runtime.lastError || !token) {
          alert(
            `SSO ended with an error: ${JSON.stringify(
              chrome.runtime.lastError
            )}`
          );
          return;
        }

        signInWithCredential(auth, GoogleAuthProvider.credential(null, token))
          .then(() => {
            console.log("signed in!");
            navigate("/");
          })
          .catch((err) => {
            alert(`SSO ended with an error: ${err}`);
          });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      } else {
        console.log("no user");
      }
    });
  }, []);

  return (
    <div
      style={{
        padding: "1em",
      }}
    >
      <Header className="App-header">
        <img src={logo} alt="logo" />
      </Header>
      <main>
        <LoginButton onClick={login}>
          <img src={google} alt="google" />
          <span>Sign in with Google</span>
        </LoginButton>
      </main>
    </div>
  );
}

export default Login;
