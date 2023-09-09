import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const QUICKLINK = [
  {
    label: "Our missions",
    path:""
  },
  {
    label: "About us",
    path:""
  },
  {
    label: "Shop",
    path:""
  },
  {
    label: "Refund policy",
    path:""
  },
  {
    label: "Privacy policy",
    path:""
  },
  {
    label: "Terms of service",
    path:""
  },
  {
    label: "Contact us",
    path:""
  },
  {
    label: "Legal mentions",
    path:""
  },
  {
    label: "What do programmers wear to work?",
    path:""
  },
  {
    label: " Developer Clothing - Expressing Code Through Fashion",
    path:""
  },
]
const Footer = () => {
  return <div className="continer">
    <h2>Quick Link</h2>
    <ul className={styles.quickLink}>
      <li>
        {
          QUICKLINK.map(({label, path})=>{
            return(
              <Link href={`${path}`} key={label}>{label}</Link>
            )
          })
        }
        
      </li>
    </ul>
    <p className="text-center small-text">Do not miss our new products and limited collections !</p>
  </div>;
};

export default Footer;
