import React, { useState } from "react";
import styles from "./textTranslate.module.css";
import TextInput from "../../components/textInput/TextInput";

function TextTranslate() {
  let [text1, setText1] = useState("");
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.heading}>Translate something...</h2>
      <div className={styles.inputContainer}>
        <TextInput placeholder={"Enter some text"} getText={setText1} />
        <TextInput />
      </div>
      <button className={styles.translateBtn}>Translate</button>
    </div>
  );
}

export default TextTranslate;
