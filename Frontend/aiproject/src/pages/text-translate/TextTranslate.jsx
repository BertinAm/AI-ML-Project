import React from "react";
import styles from "./textTranslate.module.css";
import TextInput from "../../components/textInput/TextInput";

function TextTranslate() {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.heading}>Translate something...</h2>
      <div className={styles.inputContainer}>
        <TextInput placeholder={"Enter some text"} />
        <TextInput />
      </div>
      <button className={styles.translateBtn}>Translate</button>
    </div>
  );
}

export default TextTranslate;
