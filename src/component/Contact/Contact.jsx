import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils"; // if needed for icons/images

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.footerContent}>
        {/* Company Info */}
        <div className={styles.section}>
          <h4>AONEVENTURES</h4>
          <p>
          Aoneventures is a privately owned dynamic
          company, founded in 2024 as an international reselling/trading company
          of industrial plastic raw materials.
          </p>
        </div>

        {/* Products */}
        <div className={styles.section}>
          <h4>PRODUCTS</h4>
          <ul>
            <li>Acrylonitrile Butadiene Styrene (ABS)</li>
            <li>Nylon Granules</li>
            <li>Polyoxymethylene (POM)</li>
            <li>Polycarbonates (PC)</li>
            <li>Poly Methyl Methacrylate</li>
          
            
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.section}>
          <h4>CONTACT</h4>
          <p>🏠 Jaipur, Rajasthan, India</p>
          <p>✉️ aoneventurres@gmail.com</p>
          <p>📞 +91 886 0000 814</p>
          {/* <p>📠 +01 234 567 89</p> */}
          {/* <p>📞 +91 637 5647 808</p> */}
        </div>

        {/* Social Icons */}
        <div className={styles.section}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <div className={`${styles.icon} ${styles.facebook}`}>f</div>
            <div className={`${styles.icon} ${styles.twitter}`}>t</div>
            <div className={`${styles.icon} ${styles.google}`}>G</div>
            <div className={`${styles.icon} ${styles.instagram}`}>i</div>
            <div className={`${styles.icon} ${styles.linkedin}`}>in</div>
            <div className={`${styles.icon} ${styles.github}`}>gh</div>
          </div>
        </div>
      </div>

      <div className={styles.footercopyright}>
        <span>Copyright © 2025 Aoneventures | All rights reserved</span>
      </div>
    </footer>
  );
};









// import React from "react";

// import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";

// export const Contact = () => {
//   return (
//     <footer id="contact" className={styles.container}>
  
//       <div class={styles.footercopyright}>
//         <span>Copyright © 2025 Aoneventures | All rights reserved</span>
//       </div>
//     </footer>
//   );
// };

// <footer id="contact" style="background-color: #8e9eab; color: white; font-family: Arial, sans-serif;">
//   <div style="display: flex; justify-content: space-around; padding: 40px 20px; flex-wrap: wrap;">
    
    
//     <div style="flex: 1; min-width: 200px;">
//       <h4>COMPANY NAME</h4>
//       <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//     </div>

    
//     <div style="flex: 1; min-width: 150px;">
//       <h4>PRODUCTS</h4>
//       <p>MDBootstrap</p>
//       <p>MDWordPress</p>
//       <p>BrandFlow</p>
//       <p>Bootstrap Angular</p>
//     </div>

    
//     <div style="flex: 1; min-width: 200px;">
//       <h4>CONTACT</h4>
//       <p>🏠 New York, NY 10012, US</p>
//       <p>✉️ info@gmail.com</p>
//       <p>📞 +01 234 567 88</p>
//       <p>📠 +01 234 567 89</p>
//     </div>

//     <div style="flex: 1; min-width: 200px;">
//       <h4>FOLLOW US</h4>
//       <div style="display: flex; gap: 10px; flex-wrap: wrap;">
//         <span style="background-color: #3b5998; color: white; padding: 10px; border-radius: 50%;">f</span>
//         <span style="background-color: #55acee; color: white; padding: 10px; border-radius: 50%;">t</span>
//         <span style="background-color: #dd4b39; color: white; padding: 10px; border-radius: 50%;">G</span>
//         <span style="background-color: #ac2bac; color: white; padding: 10px; border-radius: 50%;">i</span>
//         <span style="background-color: #0082ca; color: white; padding: 10px; border-radius: 50%;">in</span>
//         <span style="background-color: #333333; color: white; padding: 10px; border-radius: 50%;">gh</span>
//       </div>
//     </div>
//   </div>

  
//   <div style="background-color: #6c7a89; text-align: center; padding: 10px;">
//     <p>© 2020 Copyright: MDBootstrap.com</p>
//   </div>
// </footer>






// {/* <div class="container p-4 pb-0">
//   <section class="">
//     <div class="row">
//       <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
//         <h6 class="text-uppercase mb-4 font-weight-bold">Company name</h6>
//         <p>
//           Here you can use rows and columns to organize your footer content.
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//         </p>
//       </div>

//       <hr class="w-100 clearfix d-md-none" />

//       <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
//         <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
//         <p>
//           <a class="text-white">MDBootstrap</a>
//         </p>
//         <p>
//           <a class="text-white">MDWordPress</a>
//         </p>
//         <p>
//           <a class="text-white">BrandFlow</a>
//         </p>
//         <p>
//           <a class="text-white">Bootstrap Angular</a>
//         </p>
//       </div>

//       <hr class="w-100 clearfix d-md-none" />

//       <hr class="w-100 clearfix d-md-none" />

//       <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
//         <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
//         <p>
//           <i class="fas fa-home mr-3"></i> New York, NY 10012, US
//         </p>
//         <p>
//           <i class="fas fa-envelope mr-3"></i> info@gmail.com
//         </p>
//         <p>
//           <i class="fas fa-phone mr-3"></i> + 01 234 567 88
//         </p>
//         <p>
//           <i class="fas fa-print mr-3"></i> + 01 234 567 89
//         </p>
//       </div>

//       <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
//         <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>

//         <a
//           class="btn btn-primary btn-floating m-1"
//           style="background-color: #3b5998"
//           href="#!"
//           role="button"
//         >
//           <i class="fab fa-facebook-f"></i>
//         </a>

//         <a
//           class="btn btn-primary btn-floating m-1"
//           style="background-color: #55acee"
//           href="#!"
//           role="button"
//         >
//           <i class="fab fa-twitter"></i>
//         </a>

//         <a
//           class="btn btn-primary btn-floating m-1"
//           style="background-color: #dd4b39"
//           href="#!"
//           role="button"
//         >
//           <i class="fab fa-google"></i>
//         </a>

//         <a
//           class="btn btn-primary btn-floating m-1"
//           style="background-color: #ac2bac"
//           href="#!"
//           role="button"
//         >
//           <i class="fab fa-instagram"></i>
//         </a>

//         <a
//           class="btn btn-primary btn-floating m-1"
//           style="background-color: #0082ca"
//           href="#!"
//           role="button"
//         >
//           <i class="fab fa-linkedin-in"></i>
//         </a>

//         <a
//           class="btn btn-primary btn-floating m-1"
//           style="background-color: #333333"
//           href="#!"
//           role="button"
//         >
//           <i class="fab fa-github"></i>
//         </a>
//       </div>
//     </div>
//   </section>
// </div>; */}
