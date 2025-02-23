
// import React, { useEffect } from "react";
// import c from "./Port.module.css";

// const skillsData = [
//   { name: 'Programming Skills', percentage: 60 },
//   { name: 'Coding Skills', percentage: 70 },
//   { name: 'Communication Skills', percentage: 80 },
//   { name: 'Presentation Skills', percentage: 90 },
//   // Add more skills as needed
// ];

// const Skills = () => {
//   useEffect(() => {
//     const skillBars = document.querySelectorAll(`.${c.skillLevel}`);
//     skillBars.forEach(bar => {
//       const width = bar.dataset.width;
//       bar.style.width = 0;
//       setTimeout(() => {
//         bar.style.width = width;
//       }, 500);
//     });
//   }, []);

//   return (
//     <div className={c.skillsContainer}>
//       <h2>Skills</h2>
//       <ul>
//         {skillsData.map((skill, index) => (
//           <li key={index} className={c.skillItem}>
//             <span className={c.skillName}>{skill.name}</span>
//             <div className={c.skillBar}>
//               <div
//                 className={c.skillLevel}
//                 data-width={`${skill.percentage}%`}
//                 style={{ width: '0%' }}
//               >
//                 {skill.percentage}%
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Skills;
import React, { useEffect } from "react";
import c from "./Port.module.css";

const skillsData = [
  { name: 'Programming Skills', percentage: 60 },
  { name: 'Coding Skills', percentage: 70 },
  { name: 'Communication Skills', percentage: 80 },
  { name: 'Presentation Skills', percentage: 90 },
  // Add more skills as needed
];

const Skills = () => {
  useEffect(() => {
    const skillBars = document.querySelectorAll(`.${c.skillLevel}`);
    skillBars.forEach(bar => {
      const width = bar.dataset.width;
      bar.style.width = 0;
      setTimeout(() => {
        bar.style.width = width;
      }, 500);
    });
  }, []);

  return (
    <div className={c.skillsContainer} id="Skills">
      <h2 className={c.heading}>Skills</h2>
      <ul>
        {skillsData.map((skill, index) => (
          <li key={index} className={c.skillItem}>
            <span className={c.skillName}>{skill.name}</span>
            <div className={c.skillBar}>
              <div
                className={c.skillLevel}
                data-width={`${skill.percentage}%`}
                style={{ width: '0%' }}
              >
                <span className={c.skillPercentage}>{skill.percentage}%</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
