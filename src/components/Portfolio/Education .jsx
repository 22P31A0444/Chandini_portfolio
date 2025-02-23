// import React from "react";
// import c from "./Port.module.css";

// const educationData = [
//   { year: "B.Tech", institute: "Aditya College of Engineering and Technology", field: "Electronics and Communication Engineering", score: "CGPA: 8.29" },
//   { year: "Intermediate", institute: "Sri Chaitanya Junior College", field: "MPC", score: "Points: 9.23" },
//   { year: "10th Standard", institute: "Referral English Medium High School", field: "", score: "Points: 10" }
// ];

// const Education = () => {
//   return (
//     <div className={c.educationContainer}>
//       <h2 style={{
//         fontSize:"50px",
//         color:'#009BDF',
//         textShadow:"2px 2px 4px #C6D2E3 "
//       }}>Education</h2>
//       <div className={c.timeline}>
//         {educationData.map((item, index) => (
//           <div key={index} className={`${c.timelineItem} ${c.fadeInUp}`}>
//             <div className={c.timelineContent}>
//               <h3>{item.year}</h3>
//               <h4>{item.institute}</h4>
//               <p>{item.field}</p>
//               <p>{item.score}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Education;
import React from "react";
import c from "./Port.module.css";

const educationData = [
  { year: "B.Tech", institute: "Aditya College of Engineering and Technology", field: "Electronics and Communication Engineering", score: "CGPA: 8.29" },
  { year: "Intermediate", institute: "Sri Chaitanya Junior College", field: "MPC", score: "Points: 9.23" },
  { year: "10th Standard", institute: "Referral English Medium High School", field: "", score: "Points: 10" }
];

const Education = () => {
  return (
    <div className={c.educationContainer}id="Education">
      <h2 className={c.heading}>Education</h2>
      <div className={c.timeline}>
        {educationData.map((item, index) => (
          <div key={index} className={`${c.timelineItem} ${c.fadeInUp}`}>
            <div className={c.timelineContent}>
              <h3 className={c.year}>{item.year}</h3>
              <h4 className={c.institute}>{item.institute}</h4>
              <p className={c.field}>{item.field}</p>
              <p className={c.score}>{item.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
