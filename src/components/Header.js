import React from "react";
import styles from "./Header.module.css";
import 'font-awesome/css/font-awesome.min.css';

export default function Header() {
  return (
    <div className={styles.headerBackground}>
      <nav className={styles.container}>
        <div className={styles.brand}>HELSINGIN SANOMAT</div>
          <div className={styles.botton2}>Etusivu</div>
          <div>Uutiset</div>
          <div>Lehdet</div>
      </nav>
      <nav className={styles.buttonContainer}>
        <div > Tilla 

        </div>  
        <div> Kirjaudu <i class="fa fa-user-circle-o" aria-hidden="true"></i>
 
        </div> 
        <div> Hae <i class="fa fa-search" aria-hidden="true"></i>

        </div> 
        <div> Valikko <i class="fal fa-bars"></i> 
        </div> 
      </nav> 
    </div>       
  );
}
