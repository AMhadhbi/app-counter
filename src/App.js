
import React from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <main className='container'>
        <button className='btn btn-info'>Reset</button>
        <Counters/>
      </main>
    </React.Fragment>
  );
}

export default App;
