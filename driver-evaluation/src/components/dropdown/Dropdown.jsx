import React, { useRef, useEffect } from "react";
import { handleCompositeDataProps } from "../../utils/utils";

function Dropdown({ text, options, setFilterCb, value }) {
  const elRef = useRef();

  useEffect(() => {
    const { current } = elRef;
    current.addEventListener("optionSelected", (e) => {
      setFilterCb(e.detail);
    });
    return current.removeEventListener("optionSelected", (e) => {
      setFilterCb(e.detail);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <my-dropdown
      value={value}
      text={text}
      options={handleCompositeDataProps(options)}
      ref={elRef}
    ></my-dropdown>
  );
}

export default Dropdown;
