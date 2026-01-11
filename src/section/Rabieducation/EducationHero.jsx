import React from "react";
import "../../assets/css/Education.css";

export default function EducationHero() {
  const data = [
    {
      year: "2020 - 2023",
      degree: "B.Sc Computer Science",
      college: "Vinayak Degree College, Odisha",
      score: "CGPA: 8.5",
    },
    {
      year: "2018 - 2020",
      degree: "12TH Science",
      college: "Vinatak College Science & Commerce",
      score: "Percentage: 56.66%",
    },
    {
      year: "2018",
      degree: "10th Board",
      college: "Sahid Nagar Nodal High School , Odihsa", 
      score: "Percentage: 52.66%",
    },
  ];

  return (
    <section className="edu-section">
      <h1 className="edu-title">
        <span>Education</span>
      </h1>

      <div className="timeline">
        {data.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="content-box">
              <p className="edu-year">{item.year}</p>
              <h3 className="edu-degree">{item.degree}</h3>
              <p className="edu-college">{item.college}</p>
              <p className="edu-score">{item.score}</p>
            </div>
            <span className="circle" />
          </div>
        ))}
      </div>
    </section>
  );
}
