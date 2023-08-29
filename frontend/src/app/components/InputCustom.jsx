import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import styles from "../styles/sellerHome.module.css";
import "react-bootstrap-typeahead/css/Typeahead.css";

const TypeaheadExample = ({ options, value, set, placeholder = "" }) => {
  return (
    <Typeahead
      placeholder={placeholder}
      // labelKey="name"
      id="inputCustom"
      className={styles.inputCustom}
      onChange={(selected) => {
        set(selected[0]);
      }}
      options={options}
      value={value}
    />
  );
};

export default TypeaheadExample;
