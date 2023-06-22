import React, { useState } from "react";
import styles from "./TextInput.module.css";

function TextInput({ placeholder }) {
  let [active, setActive] = useState(false);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.tabs}>
        <div
          onClick={() => setActive(!active)}
          className={active ? styles.activeTab : styles.tab}
        >
          <p className={active ? styles.selectedLanguage : styles.language}>
            English
          </p>
        </div>
        <div
          onClick={() => setActive(!active)}
          className={active ? styles.tab : styles.activeTab}
        >
          <p className={active ? styles.language : styles.selectedLanguage}>
            French
          </p>
        </div>
      </div>
      <textarea
        className={styles.textarea}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default TextInput;
