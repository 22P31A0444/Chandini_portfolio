import React, { useEffect } from "react";
import c from "./Port.module.css";

const codingSkillsData = [
  { name: 'C', percentage: 60 },
  { name: 'Java', percentage: 70 },
  { name: 'Python', percentage: 80 }
];

const techSkillsData = [
  { name: 'HTML & CSS', percentage: 90 },
  { name: 'React', percentage: 70 },
  { name: 'React Native', percentage: 50 }
];

const Coding = () => {
  useEffect(() => {
    const skillCircles = document.querySelectorAll(`.${c.skillCircle}`);
    skillCircles.forEach(circle => {
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const percentage = circle.dataset.percentage;

      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = circumference;
      
      const offset = circumference - (percentage / 100) * circumference;
      setTimeout(() => {
        circle.style.strokeDashoffset = offset;
      }, 500);
    });
  }, []);

  return (
    <div className={c.codingContainer}>
      <h2>Skills</h2>
      <div className={c.skillsWrapper}>
        <div className={c.skillsColumn}>
          <h3>Coding Skills</h3>
          <div className={c.skillsGrid}>
            {codingSkillsData.map((skill, index) => (
              <div key={index} className={c.skillItem}>
                <svg className={c.progressCircle} width="120" height="120">
                  <circle
                    className={c.skillBgCircle}
                    cx="60"
                    cy="60"
                    r="54"
                    stroke="lightgray"
                    strokeWidth="12"
                    fill="transparent"
                  />
                  <circle
                    className={c.skillCircle}
                    cx="60"
                    cy="60"
                    r="54"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    data-percentage={skill.percentage}
                  />
                </svg>
                <div className={c.skillInfo}>
                  <h3>{skill.name}</h3>
                  <p>{skill.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={c.skillsColumn}>
          <h3>Technology Skills</h3>
          <div className={c.skillsGrid}>
            {techSkillsData.map((skill, index) => (
              <div key={index} className={c.skillItem}>
                <svg className={c.progressCircle} width="120" height="120">
                  <circle
                    className={c.skillBgCircle}
                    cx="60"
                    cy="60"
                    r="54"
                    stroke="lightgray"
                    strokeWidth="12"
                    fill="transparent"
                  />
                  <circle
                    className={c.skillCircle}
                    cx="60"
                    cy="60"
                    r="54"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    data-percentage={skill.percentage}
                  />
                </svg>
                <div className={c.skillInfo}>
                  <h3>{skill.name}</h3>
                  <p>{skill.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
// import React, { useEffect } from "react";
// import c from "./Port.module.css";

// const codingSkillsData = [
//   { name: 'C', percentage: 60 },
//   { name: 'Java', percentage: 70 },
//   { name: 'Python', percentage: 80 }
// ];

// const techSkillsData = [
//   { name: 'HTML & CSS', percentage: 90 },
//   { name: 'React', percentage: 70 },
//   { name: 'React Native', percentage: 50 }
// ];

// const Coding = () => {
//   useEffect(() => {
//     const skillCircles = document.querySelectorAll(`.${c.skillCircle}`);
//     skillCircles.forEach(circle => {
//       const radius = circle.r.baseVal.value;
//       const circumference = 2 * Math.PI * radius;
//       const percentage = circle.dataset.percentage;

//       circle.style.strokeDasharray = `${circumference} ${circumference}`;
//       circle.style.strokeDashoffset = circumference;

//       const offset = circumference - (percentage / 100) * circumference;
//       setTimeout(() => {
//         circle.style.strokeDashoffset = offset;
//       }, 500);
//     });
//   }, []);

//   return (
//     <div className={c.codingContainer}>
//       <h2 className={c.heading}>Skills</h2>
//       <div className={c.skillsWrapper}>
//         <div className={c.skillsColumn}>
//           <h3>Coding Skills</h3>
//           <div className={c.skillsGrid}>
//             {codingSkillsData.map((skill, index) => (
//               <div key={index} className={c.skillItem}>
//                 <div className={c.circleContainer}>
//                   <svg className={c.progressCircle} width="90" height="90">
//                     <circle
//                       className={c.skillBgCircle}
//                       cx="45"
//                       cy="45"
//                       r="40"
//                       strokeWidth="8"
//                       fill="transparent"
//                     />
//                     <circle
//                       className={c.skillCircle}
//                       cx="45"
//                       cy="45"
//                       r="40"
//                       strokeWidth="8"
//                       fill="transparent"
//                       data-percentage={skill.percentage}
//                     />
//                   </svg>
//                   <div className={c.circleInfo}>
//                     <p className={c.skillPercentage}>{skill.percentage}%</p>
//                   </div>
//                 </div>
//                 <div className={c.skillInfo}>
//                   <h4 className={c.skillName}>{skill.name}</h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className={c.skillsColumn}>
//           <h3>Technology Skills</h3>
//           <div className={c.skillsGrid}>
//             {techSkillsData.map((skill, index) => (
//               <div key={index} className={c.skillItem}>
//                 <div className={c.circleContainer}>
//                   <svg className={c.progressCircle} width="90" height="90">
//                     <circle
//                       className={c.skillBgCircle}
//                       cx="45"
//                       cy="45"
//                       r="40"
//                       strokeWidth="8"
//                       fill="transparent"
//                     />
//                     <circle
//                       className={c.skillCircle}
//                       cx="45"
//                       cy="45"
//                       r="40"
//                       strokeWidth="8"
//                       fill="transparent"
//                       data-percentage={skill.percentage}
//                     />
//                   </svg>
//                   <div className={c.circleInfo}>
//                     <p className={c.skillPercentage}>{skill.percentage}%</p>
//                   </div>
//                 </div>
//                 <div className={c.skillInfo}>
//                   <h4 className={c.skillName}>{skill.name}</h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Coding;
