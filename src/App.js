
import React from "react";
import Navbar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <main className='container'>
        <button className='btn btn-info'>Reset</button>
      </main>
    </React.Fragment>
  );
}

export default App;
