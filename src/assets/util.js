export function loadFacebookSDK(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}

export function initializeFacebookAsync() {
  window.fbAsyncInit = function () {
    FB.init({
      appId: "277432961928688",
      cookie: true,
      xfbml: true,
      version: "v18.0",
    });

    FB.AppEvents.logPageView();
  };
}

export function handleFBLogin(setter) {
  //  跳出 Facebook 登入的對話框
  window.FB.login(
    function (response) {
      if (response.status === "connected") {
        setter(response);
      } else {
        console.error("user stop logging in");
      }
    },
    { scope: "public_profile, email" }
  );
}
