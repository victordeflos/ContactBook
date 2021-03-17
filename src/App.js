/** @format */
import React from "react";
import { Provider } from "react-redux";
import { Contact } from "./components/contacts/Contact";
import { Navbar } from "./components/Navbar";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
        <div classname='container'>
          <div className='py-3'>
            <Contact />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default App;
