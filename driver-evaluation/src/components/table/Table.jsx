import React, { useState } from "react";

import styles from "./table.module.css";

const Table = ({ tableData }) => {
  const headings = Object.keys(tableData[0]);
  return (
    <table className={styles.main__table}>
      <thead>
        <tr>
          {headings.map((heading) => (
            <th key={heading} className={styles.main__table__heading}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((driver) => (
          <tr key={driver.driver} className={styles.main__table__row}>
            {headings.map((info) => (
              <td key={driver[info]} className={styles.main__table__cell}>
                {driver[info]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
