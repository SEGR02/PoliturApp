import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import styles from "../styles/sellerHome.module.css";
import "react-bootstrap-typeahead/css/Typeahead.css";

const InputCustom2 = ({ options, value, set }) => {
  return (
    <Typeahead
      id="inputCustom2"
      multiple
      className={styles.inputCustom}
      onChange={(selected) => {
        set(selected);
      }}
      options={options}
      value={value}
    />
  );
};

export default InputCustom2;
