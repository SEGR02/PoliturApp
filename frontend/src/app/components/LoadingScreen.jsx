import React from "react";
import styles from "@/app/styles/loadingScreen.module.css";
import { ToastContainer } from "react-toastify";

const LoadingScreen = () => {
  return (
    <div className={styles.background_spinner}>
      <span className={styles.loader}></span>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default LoadingScreen;
