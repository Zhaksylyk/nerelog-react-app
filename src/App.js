import React, { useState, useMemo } from "react";
import ListComponent from "./components/ListComponent";
import MapComponent from "./components/MapComponent";
import "./App.css";
import { mergeAppsAndClients } from "./utils/helpers";
import { apps5k, clients5k } from "./data";
import "react-virtualized/styles.css";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
//import "materialize-css/dist/css/materialize.min.css";

const App = () => {
  const data = mergeAppsAndClients(apps5k, clients5k);
  const initialStyleClassName = {
    toggle: "toggle",
    sidebar: "sidebar",
  };

  const [styleClassName, setStyleClassName] = useState(initialStyleClassName);

  const toggle = () => {
    setStyleClassName({
      ...styleClassName,
      sidebar:
        styleClassName.sidebar == "sidebar" ? "sidebar close" : "sidebar",
    });
  };

  const mapComponentMemo = useMemo(
    () => <MapComponent data={data} />,
    [[apps5k, clients5k]]
  );
  const listComponentMemo = useMemo(() => {
    console.log("ListComponent");
    return <ListComponent data={data} />;
  }, [apps5k, clients5k]);

  return (
    <>
      <nav className={`${styleClassName.sidebar}`}>
        <header>
          <div className="image-text flexCenter">
            <div className="text logo-text">
              <span className="name">
                Cписок заявок | Количество:{data.length}
              </span>
            </div>
          </div>

          <i className="bx bx-chevron-right toggle" onClick={() => toggle()}>
            <GiHamburgerMenu size={17} />
          </i>
        </header>

        {listComponentMemo}
        {/* <ListComponent /> */}
      </nav>

      <section className="home">{mapComponentMemo}</section>
    </>
  );
};

export default App;
