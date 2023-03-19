import React from "react";
import { styles } from "./util/style";
import { Billing, Contract, Home, Navbar, Statistics } from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>

      {/* Home */}
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>

      {/* Statistics */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract />
          <Billing />
        </div>
      </div>
    </div>
  );
};

export default App;
