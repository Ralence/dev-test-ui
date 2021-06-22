import React, { useState } from "react";
import Table from "../table/Table";
import Dropdown from "../dropdown/Dropdown";

import styles from "./driverInfo.module.css";

import { DRIVERS_DATA } from "../../data/driversData";
const distances = {
  shortDistance: "<= 200.000 km",
  longDistance: "> 200.000 km",
  referentValue: 200000,
};

const DriverInfo = (props) => {
  const [driversData, setDriversData] = useState(DRIVERS_DATA);
  const filters = [distances.shortDistance, distances.longDistance];
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleReset = () => setDriversData(DRIVERS_DATA);

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
    const filteredData = driversData.filter((data) => {
      return filter === distances.longDistance
        ? data.distance > distances.referentValue
        : data.distance <= distances.referentValue;
    });
    setDriversData(filteredData);
  };

  return (
    <div className={styles.main}>
      <div>
        <div className={styles.actions}>
          <Dropdown
            setFilterCb={handleFilter}
            text="Distance"
            options={filters}
            value={selectedFilter}
          />
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
