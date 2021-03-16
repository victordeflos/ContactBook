/** @format */

import { Contact } from "./components/contacts/Contact";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div classname='container'>
        <div className='py-3'>
          <Contact />
        </div>
      </div>
    </div>
  );
}
export default App;
