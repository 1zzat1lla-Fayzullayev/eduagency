import React from "react";
import { getText } from "../locales";

const Application = () => {
  return (
    <div className="service-pages">
      <div className="description container">
        <h1>{getText("headerSwiperTitle1")}</h1>
        <p>
          <span> {getText("ApplicationProceduresSpanDesc1")} </span>
          {getText("ApplicationProceduresDesc1")}
        </p>
        <p>
          <span> {getText("ApplicationProceduresSpanDesc2")} </span>
          {getText("ApplicationProceduresDesc2")}
        </p>
        <p>
          <span> {getText("ApplicationProceduresSpanDesc3")} </span>
          {getText("ApplicationProceduresDesc3")}
        </p>
        <p>
          <span> {getText("ApplicationProceduresSpanDesc4")} </span>
          {getText("ApplicationProceduresDesc4")}
        </p>
      </div>
    </div>
  );
};

export default Application;
