import React, { useState } from "react";
import Table from "../table/Table";
import Dropdown from "../dropdown/Dropdown";

import styles from "./driverInfo.module.css";

import { DRIVERS_DATA } from "../../data/driversData";

const DriverInfo = (props) => {
  const [driversData, setDriversData] = useState(DRIVERS_DATA);

  const handleReset = () => setDriversData(DRIVERS_DATA);

  const handleSort = (longDistance = false) => {
    const filteredData = DRIVERS_DATA.filter((item) =>
      longDistance ? item.distance >= 200000 : item.distance < 200000
    );
    setDriversData(filteredData);
  };

  return (
    <div className={styles.main}>
      <div>
        <div className={styles.actions}>
          <Dropdown onClick={handleSort} />
          <button className={styles.reset__btn} onClick={handleReset}>
            Reset
          </button>
        </div>
        <Table tableData={driversData} />
      </div>
    </div>
  );
};

export default DriverInfo;
