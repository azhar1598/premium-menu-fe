import React from "react";
import Header from "../HomeComponents/Header";
import HowItWorks from "../HomeComponents/HowItWorks";
import Footer from "../HomeComponents/Footer/page";

function page() {
  return (
    <>
      <Header />
      <header className="text-center py-20 px-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">How it Works</h1>
        <p className="text-xl mb-8">
          Effortlessly create, manage, and scale your online store with ease.
        </p>
      </header>
      <HowItWorks />
      <Footer />
    </>
  );
}

export default page;
