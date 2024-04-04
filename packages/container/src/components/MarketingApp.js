import React, { useRef, useEffect } from "react";
import { marketingMount } from "marketing/MarketingIndex";

const MarketingApp = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      marketingMount(ref.current);
    }
  }, [ref.current]);

  return <div ref={ref}></div>;
};

export default MarketingApp;
