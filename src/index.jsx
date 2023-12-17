import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./reducers";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));
<iframe src="jsxindex.html"></iframe>
root.render(
  <Suspense
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
