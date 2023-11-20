import React from 'react';
import { TOP_HEADER } from "../../../constant/index.js"
import styles from "./styles.module.css";

const Topheader = () =>{

  return (
    <div className={styles.topHeader}>
      <div className='continer'>
        <div className='text-center small-text'>
          {TOP_HEADER}
        </div>
      </div>
    </div>
  )
}

export default Topheader;
