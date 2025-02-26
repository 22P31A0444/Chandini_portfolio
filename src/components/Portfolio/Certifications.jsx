


// import React from "react";
// import c from "./Port.module.css";

// const certifications = [
//     { name: "C Language Certificate", provider: "Cisco", date: "January 2022" },
//     { name: "Java Certificate", provider: "Oracle", date: "March 2021" },
//     { name: "IT Specialist Python Certificate", provider: "IT Specialist", date: "May 2021" },
//     { name: "HTML and CSS Certificate", provider: "IT Specialist", date: "August 2020" },
//     { name: "JavaScript Essentials - 1 Certificate", provider: "Cisco", date: "November 2021" },
//     { name: "JavaScript Essentials Certificate", provider: "Cisco", date: "July 2022" }
// ];

// const Certifications = () => {
//     return (
//         <div>
//             <h2 className={c.title}>Certifications</h2>
//             <div className={c.certificationsContainer}>
//                 {certifications.map((cert, index) => (
//                     <div key={index} className={c.certificationCard}>
//                         <div className={c.icon}>📜</div>
//                         <p>{cert.name} | {cert.provider} | <span className={c.date}>{cert.date}</span></p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Certifications;



import React from "react";
import c from "./Port.module.css";


const certifications = [
    { name: "C Language Certificate", provider: "Cisco", date: "January 2023", link: "https://media.licdn.com/dms/image/v2/D5622AQGVGILn01HgxQ/feedshare-shrink_800/B56ZVCjrrIGoAg-/0/1740578417985?e=1743638400&v=beta&t=7FwDCGLIWdYKlyp42dKOzPgo1dkQNNawxvzVM8KOk4Y" },
    { name: "Java Certificate", provider: "Oracle", date: "May 2023", link: "https://media.licdn.com/dms/image/v2/D5622AQFV2J_-S9Cotg/feedshare-shrink_800/feedshare-shrink_800/0/1684318193239?e=1743033600&v=beta&t=6cAWMJAnqZ9_CWHX_cPtL05YpaNJGmbDy4qTNbHKxYs" },
    {name:"Java Certificate",provider:"IT specialist",date:"May 2023",link:"https://media.licdn.com/dms/image/v2/D5622AQE3RZHA-cJVFw/feedshare-shrink_800/feedshare-shrink_800/0/1685454468701?e=1743033600&v=beta&t=0f6QI96v_GoD47RSt5EfTbdYEeuzFIJUWkI_zj87054"},
    { name: "IT Specialist Python Certificate", provider: "IT Specialist", date: "July 2024", link: "https://media.licdn.com/dms/image/v2/D5622AQEKTSI4UhlZdw/feedshare-shrink_800/feedshare-shrink_800/0/1720456343178?e=1743033600&v=beta&t=QQi86s8_yvWGTKHtpsGLQ_xOkPxAAol3Rj_uyDvgU_E" },
    { name: "HTML and CSS Certificate", provider: "IT Specialist", date: "May 2023", link: "https://media.licdn.com/dms/image/v2/D5622AQHlpgjgybZGVA/feedshare-shrink_800/feedshare-shrink_800/0/1685602130722?e=1743033600&v=beta&t=63P8phtvoMN8oGQqiAJgXJwEHqt0nRWo8udW3Zh5rJ8" },
    { name: "JavaScript Essentials - 1 Certificate", provider: "Cisco", date: "November 2021", link: "https://media.licdn.com/dms/image/v2/D5622AQGoc4oifcU8Vg/feedshare-shrink_1280/B56ZVCjr0bGUAk-/0/1740578427773?e=1743638400&v=beta&t=Gpsx-ufrRmVSZ0bluVS8_pt-nnR1ApgZg3r3WkdNkCU" },
    { name: "JavaScript Essentials Certificate", provider: "Cisco", date: "July 2022", link: "https://media.licdn.com/dms/image/v2/D5622AQFN8z1e8S0uuw/feedshare-shrink_1280/B56ZVCjrz9GUAo-/0/1740578427734?e=1743638400&v=beta&t=xytHY0iJfJErNGT4JlBeX3qWzLV0gtYJf4uVlt9GGgg" }
];

const Certifications = () => {
    return (
        <div id="Certifications">
            <h2 className={c.title}>Certifications</h2>
            <div className={c.certificationsContainer}>
                {certifications.map((cert, index) => (
                    <div key={index} className={c.certificationCard}>
                        <div className={c.icon}>📜</div>
                        <p>{cert.name} | {cert.provider} | <span className={c.date}>{cert.date}</span></p>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className={c.viewButton}>
                            View
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;


