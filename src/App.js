import React from "react";
import { styles } from "./util/style";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default App;
