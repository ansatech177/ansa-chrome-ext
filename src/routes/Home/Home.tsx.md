# Home Component Documentation

[Linked Table of Contents](#linked-table-of-contents)

## Linked Table of Contents

* [1. Overview](#1-overview)
* [2. Imports](#2-imports)
* [3. `Home` Component](#3-home-component)
    * [3.1 `useHistory` Hook](#31-usehistory-hook)
    * [3.2 Firebase Authentication Setup](#32-firebase-authentication-setup)
    * [3.3 `useEffect` Hook for Authentication Check](#33-useeffect-hook-for-authentication-check)
    * [3.4 `logout` Function](#34-logout-function)
    * [3.5  JSX Structure](#35-jsx-structure)


## 1. Overview

The `Home` component serves as the main landing page for the application. It displays a header with the application logo and a logout button, and provides navigation links to other parts of the application.  The component relies on Firebase for authentication and uses the Chrome Identity API for single sign-on (SSO) logout.

## 2. Imports

The component imports the following:

| Import                      | Description                                                                     |
|------------------------------|---------------------------------------------------------------------------------|
| `Link`, `useHistory`         | React Router components for navigation.                                          |
| `logo`, `powerIcon`          | Image assets for the logo and logout button.                                     |
| `Button`, `HomeHeader`, `LinkButton` | Styled components for UI elements.                                               |
| `app`                        | Firebase app instance.                                                          |
| `getAuth`, `signOut`        | Firebase authentication methods.                                                |
| `useEffect`                  | React hook for managing side effects.                                           |


## 3. `Home` Component

### 3.1 `useHistory` Hook

The `useHistory` hook from `react-router-dom` is used to programmatically navigate to different routes within the application.  Specifically, the `push` function (aliased as `navigate`) redirects the user to the login page if they are not authenticated.

### 3.2 Firebase Authentication Setup

`getAuth(app)` retrieves the Firebase authentication instance associated with the initialized app. This instance is used to manage the user's authentication state.


### 3.3 `useEffect` Hook for Authentication Check

The `useEffect` hook with an empty dependency array `[]` ensures that the authentication state check runs only once after the component mounts.  `auth.onAuthStateChanged` listens for changes in the user's authentication status. If the user is not authenticated (`!user`), the user is redirected to the `/login` route using `navigate("/login")`.

```javascript
useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, []);
```

### 3.4 `logout` Function

The `logout` function handles user logout. It leverages the Chrome Identity API for SSO logout.

1. **Retrieve Auth Token:** It attempts to retrieve the Chrome Identity auth token using `chrome.identity.getAuthToken({ interactive: false }, (token) => { ... });`.  The `interactive: false` option prevents a popup from appearing, which is important for a seamless logout experience.

2. **Error Handling:** It checks for errors using `chrome.runtime.lastError` and handles cases where a token is not available. An alert displays any errors encountered.

3. **Firebase Sign Out:** If the token is retrieved successfully, it signs the user out from Firebase using `signOut(auth)`.

4. **Remove Cached Token:** After successful Firebase sign-out, it removes the cached auth token using `chrome.identity.removeCachedAuthToken({ token }, () => { ... });`. This ensures a clean logout from the Chrome Identity system.

5. **Navigation:** Finally, it redirects the user to the `/login` page.

```javascript
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
```

### 3.5 JSX Structure

The JSX structure renders the application header with the logo and logout button. It then displays a section with navigation buttons for adding sequences, generating PDFs (DocSend), and a placeholder button.

```javascript
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
```
