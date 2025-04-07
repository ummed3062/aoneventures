import React, { useState } from "react";
import { getImageUrl } from "../../utils";

import styles from "./Hero.module.css";

export const Hero = () => {
  const [showIframe, setShowIframe] = useState(false);
  const googleDriveFileURL =
    "https://drive.google.com/file/d/1r9CcurGQ8TODP0cCA_K5KqJJU0j_RZqQ/preview";

  const handleButtonClick = () => {
    setShowIframe(true);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome To Aoneventures</h1>
        <p className={styles.description}>
          Aoneventures is a privately owned dynamic company, founded in 2024
          as an international reselling/trading company of industrial plastic
          raw materials. We have been performing in the plastic material
          industry since 2024 and we are mainly specialized in Nylon/ABS and
          Polypropylene raw material. Very concerned by the future of
          our planet we also focus on regrinds and regran from post industrial
          and post consumer waste.
        </p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a
              href="https://www.instagram.com/aoneventures?igsh=MTZkcHY4OWdwbnAwbQ%3D%3D&utm_source=qr"
              target="_blank"
            >
              {" "}
              <img
                src={getImageUrl("contact/insta1.png")}
                alt="Instagram icon"
              />
            </a>
          </li>
          <li className={styles.link}>
            <a
              href="https://www.instagram.com/aoneventures?igsh=MTZkcHY4OWdwbnAwbQ%3D%3D&utm_source=qr"
              target="_blank"
            >
              {" "}
              <img
                src={getImageUrl("contact/twitter40.png")}
                alt="Twitter icon"
              />
            </a>
          </li>
        
        </ul>
      </div>
      <img
        src={getImageUrl("hero/image/caco3-Filler-3.webp")}
        alt="Ummed's Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
