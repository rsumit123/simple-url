import { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import UrlShortenForm from "./UrlShortenForm";
function HomePage() {
  return (
    <div>
      <NavBar />
      <UrlShortenForm />
      <Footer />
    </div>
  );
}

export default HomePage;
