import "../assets/css/Skills.css";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "API Integration",
    "Redux",
    "Context API",
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
