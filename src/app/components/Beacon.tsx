"use client";

import React, { useEffect } from "react";
import sendBeacon from "../utils/sendBeacon";

const PRIMARY_URL = "https://admin.noanzo.pl/analitics";
const BETA_URL = process.env.NEXT_PUBLIC_ANALYTICS_BETA_URL;

const Beacon = () => {
  useEffect(() => {
    const payload = {
      ref: document.referrer,
      loc: window.location.href,
    };

    sendBeacon(PRIMARY_URL, payload);

    // Test copy to the new server (enabled only when the env var is set)
    if (BETA_URL) sendBeacon(BETA_URL, payload);
  }, []);
  return <></>;
};

export default Beacon;