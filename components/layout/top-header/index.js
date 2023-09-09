import React from 'react';
import styles from "./styles.css";
import { TOP_HEADER } from "../../../constant/index.js"


const Topheader = () =>{

  return (
    <div className='top-header'>
      <div className='continer'>
        <div className='text-center small-text'>
          {TOP_HEADER}
        </div>
      </div>
    </div>
  )
}

export default Topheader;
