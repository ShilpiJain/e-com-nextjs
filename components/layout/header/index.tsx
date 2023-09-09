import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const MEGALink = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about-us",
  },
  {
    label: "Our Services",
    path: "/our-services",
  },
  {
    label: "Contact Us",
    path: "/contact-us",
  },
];
export default function Header() {
  return (
    <div className="padding-30">
      <div className="continer">
        <div className="flexBox">
          <label>logo</label>
          <ul className={`${styles.megaMenu}`}>
            {MEGALink.map(({ label, path }) => {
              return (
                <li key={""}>
                  <Link href={`${path}`}>{label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
