import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Features from "./components/features/features";
import Header from "./components/header/header";
import HeroSection from "./components/hero-section/heroSection";
import NoLicenseIsNeeded from "./components/no-trial/no-license-is-needed";
import Customers from "./components/customers/customers";
import Accordion from "./components/accordion/accordion";
import Footer from "./components/footer/footer";
import Demos from "./components/demos/demos";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="my-10 px-[72px] max-[970px]:px-14 max-[620px]:px-10 max-[490px]:px-5">
      {/* هدر */}
      <Header />

      {/* هیروسکشن */}
      <HeroSection
        title="کامل‌ترین قالب رستوران و کافه "
        slogan="با ترنج از اسنپ فود بی نیاز شو"
      />

      {/* ویژگی ها */}
      <Features />

      {/* دمو های ترنج */}
      <Demos />

      {/* مشتریان قالب ترنج */}
      <Customers />

      {/* بدون نیاز به تمدید سالانه */}
      <NoLicenseIsNeeded />

      {/* اموزش قالب */}

      {/* سوالات متداول */}
      <Accordion />

      {/* فوتر */}
      <Footer />
    </div>
  </React.StrictMode>
);
