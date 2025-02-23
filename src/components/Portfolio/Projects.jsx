// // import React from "react";
// // import c from "./Port.module.css";

// // const projectsData = [
// //   { title: 'All Age Hub', description: 'This is my first project.', imageUrl: 'https://via.placeholder.com/300x200?text=All+Age+Hub' },
// //   { title: 'College Hub', description: 'This is my second project.', imageUrl: 'https://via.placeholder.com/300x200?text=College+Hub' },
// // ];

// // const Projects = () => {
// //   return (
// //     <div className={c.projectsContainer}>
// //       <h2>Projects</h2>
// //       <div className={c.projectsGrid}>
// //         {projectsData.map((project, index) => (
// //           <div key={index} className={c.projectBox}>
// //             <img src={project.imageUrl} alt={project.title} className={c.projectImage} />
// //             <div className={c.projectInfo}>
// //               <h3>{project.title}</h3>
// //               <p>{project.description}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Projects;


// import React, { useEffect, useRef } from "react";
// import c from "./Port.module.css";
// import pic1 from "../../assets/projectpic1.jpg"; 
// import pic2 from "../../assets/projectpic2.jpg";
// import pic3 from "../../assets/collegehub.jpg";

// const projectsData = [
//   { title: 'All Age Hub', description: 'This project includes the fields of all ages and its purely useful for every age . Like children have games, Adults have job information for entertainment purpose we have music sector and Aged perons have devotional songs and newspapers . The tools used are HTML , CSS , JAVASCRIPT', imageUrl: pic1 }, // Use imported local image
//   { title: 'College Hub', description: 'This project includes the fields of college like we have the college latest upadtes and upcoming events in the college and the Alumins who passed can access this website and comcduct meetings with the juniors for carrier guidance . The tools used are REACT , MONGODB', imageUrl: pic3},
//   { title: 'Train collision avoidance system', description: 'This project is purely a protype of a system which is used to avoid the train collisions as we are frequently listening about the train collisions so to avoid those we came with some solutions . The tools used in it is SENSORS ,ARDUINO BOARD.', imageUrl: pic2}
// ];

// const Projects = () => {
//   const projectsRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add(c.appear);
//         } else {
//           entry.target.classList.remove(c.appear);
//         }
//       });
//     }, { threshold: 0.1 });

//     projectsRef.current.forEach(project => {
//       observer.observe(project);
//     });

//     return () => {
//       projectsRef.current.forEach(project => {
//         observer.unobserve(project);
//       });
//     };
//   }, []);

//   return (
//     <div className={c.projectsContainer} id="Projects">
//       <h2
//       style={{
//         fontSize:"50px",
//         textShadow: "2px 2px 5px #C6D2E3"
//       }}>Projects</h2>
//       <div className={c.projectsGrid}>
//         {projectsData.map((project, index) => (
//           <div
//             key={index}
//             className={c.projectBox}
//             ref={el => projectsRef.current[index] = el}
//           >
//             <img src={project.imageUrl} alt={project.title} className={c.projectImage} /> {/* Use imageUrl directly */}
//             <div className={c.projectInfo}>
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;




import React, { useEffect, useRef } from "react";
import c from "./Port.module.css";
import pic1 from "../../assets/projectpic1.jpg"; 
import pic2 from "../../assets/projectpic2.jpg";
import pic3 from "../../assets/collegehub.jpg";

const projectsData = [
  { title: 'All Age Hub', description: 'This project includes the fields of all ages and its purely useful for every age. Like children have games, adults have job information, for entertainment purposes we have a music sector, and aged persons have devotional songs and newspapers. The tools used are HTML, CSS, JAVASCRIPT', imageUrl: pic1 }, // Use imported local image
  { title: 'College Hub', description: 'This project includes the fields of college like we have the college latest updates and upcoming events in the college, and the alumni who passed can access this website and conduct meetings with the juniors for career guidance. The tools used are REACT, MONGODB', imageUrl: pic3 },
  { title: 'Train collision avoidance system', description: 'This project is purely a prototype of a system which is used to avoid the train collisions as we are frequently listening about the train collisions. The tools used are SENSORS, ARDUINO BOARD.', imageUrl: pic2 }
];

const Projects = () => {
  const projectsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(c.appear);
        } else {
          entry.target.classList.remove(c.appear);
        }
      });
    }, { threshold: 0.1 });

    projectsRef.current.forEach(project => {
      if (project) observer.observe(project);
    });

    return () => {
      projectsRef.current.forEach(project => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);

  return (
    <div className={c.projectsContainer} id="Projects">
      <h2
        style={{
          fontSize: "50px",
          textShadow: "2px 2px 5px #C6D2E3"
        }}>Projects</h2>
      <div className={c.projectsGrid}>
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={c.projectBox}
            ref={el => projectsRef.current[index] = el}
          >
            <img src={project.imageUrl} alt={project.title} className={c.projectImage} />
            <div className={c.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
