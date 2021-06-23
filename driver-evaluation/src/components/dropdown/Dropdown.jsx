import React, { useRef, useEffect } from "react";

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
  }, []);

  return (
    <my-dropdown
      value={value}
      text={text}
      options={JSON.stringify(options)}
      ref={elRef}
    ></my-dropdown>
  );
}

export default Dropdown;
