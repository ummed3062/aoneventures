import React from "react";
import styles from "./About1.module.css";
import { getImageUrl } from "../../utils";
export default function About1() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <p className={styles.description}>
          Aone Ventures is a privately owned dynamic company, founded in 2024 as
          an international reselling/trading company of industrial plastic raw
          materials. We have been performing in the plastic material industry
          since 2024 and we are mainly specialized in Nylon / ABS and
          Polypropylene raw material. Very concerned by the future of
          our planet we also focus on regrinds and regran from post industrial
          and post consumer waste.
        </p>

        <p className={styles.description}>
          We are one of the leading Manufacturers, Suppliers and Exporters of
          Plastic Raw Material. We market our products under the brand name
          "Aoneventures" such as Manufacturing and Trading in Broad Range of
          Plastic Raw Material, Plastic Raw Material Reprocessing Services,
          Virgin Plastic Raw Material, Color Masterbatches , Colored Plastic
          Granules , Job Work Of Reprocessing Of Plastic, Master Batches
          Plastic, Plastic Raw Materials, Polymer Granules, Polypropylene
          Granules, Pp Granules, Pvc Plastic Granules, Recycled Granules,
          Reprocessed Plastic Granules, Reprocessors Of Plastic Raw Materials,
          Thermoplastic Granules, Thermoplastic Raw Materials. Our setup is
          situated in Jaipur, Rajasthan, India.
        </p>

        <p className={styles.description}>
          Our world-class quality products that are manufactured by us. Our
          company is committed to manufacture Plastic Raw Materials.
        </p>
      </div>
      <section className={styles.container1}>
        <div className={styles.content1}>
          {/* <h1 className={styles.title1}>Aman Shrama</h1> */}
          <p className={styles.description1}>
            As the founder of Aone Ventures, I’m proud to lead a company driven
            by innovation, sustainability, and a commitment to quality in the
            industrial plastics trade. Our mission is to build a global impact
            while contributing to a greener future through responsible sourcing
            and recycling.
            <br />
            <span
              style={{
                display: "block",
                textAlign: "right",
                marginTop: "1rem",
              }}
            >
              — Aman Sharma 
            </span>
            <span
              style={{
                display: "block",
                textAlign: "right",
                // marginTop: "1rem",
              }}
            >
             Founder
            </span>
            <span
              style={{
                display: "block",
                textAlign: "right",
                marginTop: "1rem",
              }}
            >
              <a
                href="https://www.instagram.com/_aman__0001"
                target="_blank"
              >
                {" "}
                <img
                  src={getImageUrl("contact/insta1.png")}
                  alt="Instagram icon"
                />
              </a>
            </span>
          </p>
        </div>
        <img
          src={getImageUrl("hero/image/aman2.jpg")}
          alt="Aman's Image"
          className={styles.heroImg1}
        />
        <div className={styles.topBlur1} />
        <div className={styles.bottomBlur1} />
      </section>
    </section>
  );
}
