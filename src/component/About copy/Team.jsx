import React from "react";
import styles from "./Team.module.css";

export const Team = () => {
  const teamMembers = [
    {
      name: "Ananya Sharma",
      role: "Project Manager",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Rohan Verma",
      role: "Backend Developer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Priya Mehta",
      role: "UI/UX Designer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Amit Singh",
      role: "Frontend Developer",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className={styles.teamSection}>
      <h2>Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div className={styles.card} key={index}>
            <img src={member.image} alt={member.name} className={styles.image} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
