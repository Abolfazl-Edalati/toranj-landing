import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Features from "./components/features/features";
import Header from "./components/header/header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="px-[72px] max-[970px]:px-14 max-[620px]:px-10 max-[490px]:px-5">
      {/* هدر */}
      {/* <Header /> */}

      {/* ویژگی ها */}
      {/* <Features /> */}
    </div>
  </React.StrictMode>
);
