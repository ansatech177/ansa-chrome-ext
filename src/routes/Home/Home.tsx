import { Link, useHistory } from "react-router-dom";

import logo from "../../assets/logo.png";
import powerIcon from "../../assets/icons/power.svg";
import {
  Button,
  HomeHeader,
  LinkButton,
} from "../../components/styled-components";
import { app } from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";

export default function Home() {
  const { push: navigate } = useHistory();

  const auth = getAuth(app);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, []);

  const logout = () => {
    chrome.identity.getAuthToken({ interactive: false }, (token) => {
      if (chrome.runtime.lastError || !token) {
        alert(
          `SSO ended with an error: ${JSON.stringify(chrome.runtime.lastError)}`
        );
        return;
      }

      signOut(auth).then(() => {
        chrome.identity.removeCachedAuthToken({ token }, () => {
          console.log("logged out!");
        });
        navigate("/login");
      });
    });
  };

  return (
    <div>
      <HomeHeader>
        <img src={logo} alt="logo" />
        <button onClick={logout}>
          <img src={powerIcon} alt="power" />
        </button>
      </HomeHeader>
      <div
        style={{
          padding: "1em 1em 0 1em",
        }}
      >
        <Link to={"/add-sequence"}>
          <LinkButton>Add to Sequence</LinkButton>
        </Link>
        <Button>DocSend To PDF</Button>
        <Button bg="#0D0628" color="#ffffff">
          ___ TBD ___
        </Button>
      </div>
    </div>
  );
}
