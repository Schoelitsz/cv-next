import React from 'react';

type Skill = {
  name: string;
  color: string;
  percentage: number; // Represents the size of the skill segment
  description: string;
};

const skillsArray: Skill[] = [
  { name: 'Python', color: '#306998', percentage: 80, description: 'Extensive experience in scripting and automation.' },
  { name: 'C#', color: '#68217A', percentage: 60, description: 'Used for desktop applications and backend services.' },
  { name: 'JavaScript', color: '#F7E03C', percentage: 70, description: 'Proficient in front-end development with React.' },
  { name: 'HTML & CSS', color: '#F16529', percentage: 75, description: 'Strong background in building responsive web pages.' },
  { name: 'SQL', color: '#E34F26', percentage: 65, description: 'Experienced in database management and query optimization.' },
  { name: 'PHP', color: '#4F5D95', percentage: 50, description: 'Experience with backend development and server-side scripting.' },
];

const SkillWheel: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50" id="Skills">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        <div className="skill-wheel-container">
          <div className="skill-wheel">
            {skillsArray.map((skill, index) => (
              <div
                key={index}
                className="skill-wheel-segment"
                style={{
                  clipPath: `polygon(0% 0%, ${skill.percentage}% 0%, ${skill.percentage}% 100%, 0% 100%)`,
                  backgroundColor: skill.color,
                  transform: `rotate(${(360 / skillsArray.length) * index}deg)`,
                }}
              >
                <div
                  className="skill-wheel-segment-content"
                  style={{
                    transform: `rotate(-${(360 / skillsArray.length) * index}deg)`,
                  }}
                >
                  {skill.name}
                </div>
              </div>
            ))}
            <div className="skill-wheel-border"></div>
          </div>
        </div>
        <div className="skill-card-container">
          {skillsArray.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillWheel;
