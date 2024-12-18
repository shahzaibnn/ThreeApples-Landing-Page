import React from "react";
import "./App.css";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white min-h-screen pb-10">
      {/* Header Section */}
      <Section1 />
      {/* Second Part */}
      <Section2 />
      {/* Section 3 */}
      <Section3 />
      {/* Section 4 */}
      <Section4 />
      {/* Section 5 */}
      <Section5 />
      {/* Section 6 */}
      <Section6 />
      {/* Section 7 */}
      <Section7 />
      {/* Section 8 */}
      <Section8 />
      {/* Section 9 */}
      <Section9 />
      {/* Section 10 */}
      <Section10 />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
