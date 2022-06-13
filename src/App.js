import React from "react";
import ListComponent from "./components/ListComponent";
import MapComponent from "./components/MapComponent";
import "./App.css";
import { mergeAppsAndClients } from "./utils/helpers";
import { apps5k, clients5k } from "./data";
import "react-virtualized/styles.css";
import "materialize-css/dist/css/materialize.min.css";

const App = () => {
  const data = mergeAppsAndClients(apps5k, clients5k);

  return (
    <div className="main-container">
      <div className="list-container">
        <ListComponent data={data} />
      </div>
      <div className="map-container">
        <MapComponent data={data} />
      </div>
    </div>
  );
};

export default App;
