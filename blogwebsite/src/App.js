import React from "react";
import RouterComponent from "./Utility/RouteCompo";
import ContextAPI from "./Utility/ContextAPI";

function App() {

  return (
    <div className="App">
      <ContextAPI>
        <RouterComponent />
      </ContextAPI>
    </div>
  );
}

export default App;