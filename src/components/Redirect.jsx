import React, { useEffect } from "react";
import Loader from "./Loader";



const RedirectComponent = () => {
  useEffect(() => {
    const fetchData = async (currentUrl) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_LONG_URL}?short_url=${currentUrl}`,
          { "Content-Type": "application/json" }
        );
        const data = await response.json();
        const redUrl = data.long_url;
        window.location.href = redUrl;
      } catch (error) {
        console.error("Error:", error);
      }
    };

    let currentUrl = window.location.pathname;
    currentUrl = currentUrl.replace("/", "");
    console.log("currentURL  => ", currentUrl);

    if(currentUrl !== "undefined"){

    fetchData(currentUrl);
    }
  }, []);

  return (
    
      <Loader />
   
  );
};

export default RedirectComponent;
