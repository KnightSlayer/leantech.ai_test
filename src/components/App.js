import React from "react"; // кстати, в реакте 17 уже необязательно импортировать React для jsx
import Tabs from "./Tabs";

import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header} />

      <Tabs />

      <footer className={styles.footer} />
    </div>
  );
}
