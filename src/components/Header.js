import React from "react";
import styles from "./Header.module.css";
import "font-awesome/css/font-awesome.min.css";

export default function Header(props) {
  const { width, space_left } = props;
  return (
    <div
      className={styles.headerBackground}
      style={{ paddingLeft: space_left }}
    >
      <div
        style={{
          width: width,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <nav className={styles.container}>
          <div className={styles.brand}>HELSINGIN SANOMAT</div>
          <div className={styles.botton2}>Etusivu</div>
          <div>Uutiset</div>
          <div>Lehdet</div>
        </nav>
        <nav className={styles.buttonContainer}>
          <div> Tilla</div>
          <div>
            {" "}
            Kirjaudu <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          </div>
          <div>
            {" "}
            Hae <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <div>
            {" "}
            Valikko <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </nav>
      </div>
    </div>
  );
}
