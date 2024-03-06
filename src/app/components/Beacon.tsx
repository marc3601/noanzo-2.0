"use client";

import React, { useEffect } from "react";
import sendBeacon from "../utils/sendBeacon";

const Beacon = () => {
  useEffect(() => {
    const source = document.referrer;
    const location = window.location.href;

    sendBeacon("https://admin.noanzo.pl/analitics", {
      ref: source,
      loc: location,
    });
  }, []);
  return <></>;
};

export default Beacon;
