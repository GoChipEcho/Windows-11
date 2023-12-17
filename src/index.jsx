import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./reducers";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
  <Suspense
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Poppins&family=Roboto&family=Space+Mono&family=Work+Sans&display=swap" rel="stylesheet">
<style>
body, html {
  height: 100%;
  margin: 0;
}

.container {
    position: relative;
    text-align: center;
    color: white;
}
  
.welcome{
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Poppins', sans-serif;
  font-size: 25;
  color: white;
}

.bg {
  background-image: url("/src/loadingWindows.jpg");

  /* Full height */
  height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

  .loader {
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid #3498db;
    width: 15px;
    height: 15px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
<div class="startupWelcome">
<div class="bg"></div>
<center class="welcome">
  Welcome 
  <br>
  <br>
  <br>
  <br>
  <br>
  <div class="loader"></div>
</center>
</div>
    fallback={
      <div id="sus-fallback">
      </div>
    }
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
);
