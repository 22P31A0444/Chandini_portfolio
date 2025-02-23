
// import React, { useState } from "react";
// import c from "./Port.module.css";
// import { VscThreeBars } from "react-icons/vsc";
// import { RxCross2 } from "react-icons/rx";
// import pic1 from "../../assets/mainpic.png"

// export default function Home_Page() {
//     const [open, setOpen] = useState(false);
//     const toggleMenu = () => {
//         setOpen(!open);
//     };

//     return(
//         <>
//             <div className={c.Headerr}>
//                 {/* <div className={c.header_logo}>
//                     <img src={"pic1.jpg"} alt="cracked" width={'60px'} height={'60px'} />
//                 </div> */}
//                 <div className={c.heads}>
//                     <a href="#Home" className={c.menuItem}>Home</a>
//                     <a href="#About" className={c.menuItem}>About</a>
//                     <a href="#Education" className={c.menuItem}>Education</a>
//                     <a href="#Certifications" className={c.menuItem}>Certifications</a>
//                     <a href="#Projects" className={c.menuItem}>Projects</a>
//                 </div>
//                 <div onClick={toggleMenu} className={c.toggleMenu}>
//                     {open ? <RxCross2 /> : <VscThreeBars />}
//                 </div>
//             </div>
//             <div className={`${c.overlay} ${open ? c.open : ''}`} onClick={toggleMenu}></div>
//             <div className={`${c.openMenu} ${open ? c.open : ''}`}>
//                 <a href="#Home" className={c.menuItem} onClick={toggleMenu}>Home</a>
//                 <a href="#About" className={c.menuItem} onClick={toggleMenu}>About</a>
//                 <a href="#Education" className={c.menuItem} onClick={toggleMenu}>Education</a>
//                 <a href="#Certifications" className={c.menuItem} onClick={toggleMenu}>Certifications</a>
//                 <a href="#Projects" className={c.menuItem} onClick={toggleMenu}>Projects</a>
//             </div>

//             <div className={c.header1}>
//                 <div className={c.left1}>
//                     <div className={c.circle}>
//                         <div className={c.photo}><img src={pic1}></img></div>
//                     </div>
//                 </div>
//                 <div className={c.right1}>
//                     <div className={c.revealText}>Hi I am</div>
//                     <div className={c.revealText}>Chandini Divya</div>
//                     <div className={c.revealText}>Full Stack Developer</div>
//                     <div><button className={c.resumeButton}><a href="/resume.pdf" download>Download Resume</a></button></div>
//                 </div>
//             </div>
//         </>
//     );
// }

// import React, { useState } from "react";
// import c from "./Port.module.css";
// import { VscThreeBars } from "react-icons/vsc";
// import { RxCross2 } from "react-icons/rx";
// import pic1 from "../../assets/mainpic.png"

// export default function Home_Page() {
//     const [open, setOpen] = useState(false);
//     const toggleMenu = () => {
//         setOpen(!open);
//     };

//     return (
//         <>
//             <div className={c.Headerr}>
//                 <div className={c.heads}>
//                     <a href="#Home" className={c.menuItem}>Home</a>
//                     <a href="#About" className={c.menuItem}>About</a>
//                     <a href="#Education" className={c.menuItem}>Education</a>
//                     <a href="#Skills" className={c.menuItem}>Skills</a>
//                     <a href="#certifications" className={c.menuItem}>Certifications</a>
//                     <a href="#Projects" className={c.menuItem}>Projects</a>
//                     <a href="#Contact" className={c.menuItem}>Contact</a>
//                 </div>
//                 <div onClick={toggleMenu} className={c.toggleMenu}>
//                     {open ? <RxCross2 /> : <VscThreeBars />}
//                 </div>
//             </div>
//             <div className={`${c.overlay} ${open ? c.open : ''}`} onClick={toggleMenu}></div>
//             <div className={`${c.openMenu} ${open ? c.open : ''}`}>
//                 <a href="#Home" className={c.menuItem} onClick={toggleMenu}>Home</a>
//                 <a href="#About" className={c.menuItem} onClick={toggleMenu}>About</a>
//                 <a href="#Education" className={c.menuItem} onClick={toggleMenu}>Education</a>
//                 <a href="#Skills" className={c.menuItem} onClick={toggleMenu}>Skills</a>
//                 <a href="#Certifications" className={c.menuItem} onClick={toggleMenu}>Certifications</a>
//                 <a href="#Projects" className={c.menuItem} onClick={toggleMenu}>Projects</a>
//                 <a href="#Contact" className={c.menuItem} onClick={toggleMenu}>Contact</a>
//             </div>

//             <div className={c.header1}>
//                 <div className={c.left1}>
//                     <div className={c.circle}>
//                         <div className={c.photo}><img src={pic1} alt="profile" /></div>
//                     </div>
//                 </div>
//                 <div className={c.right1}>
//                     <div className={c.revealText}>Hi I am</div>
//                     <div className={c.revealText}>Chandini Divya</div>
//                     <div className={c.revealText}>Full Stack Developer</div>
//                     <div><button className={c.resumeButton}><a href="/resume.pdf" download>Download Resume</a></button></div>
//                 </div>
//             </div>
//         </>
//     );
// }
import React, { useState } from "react";
import c from "./Port.module.css";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import pic1 from "../../assets/mainpic.png";

export default function Home_Page() {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className={c.Headerr} style={{ position: 'fixed', width: '100%' }} id="Home">
                <div className={c.heads}>
                    <div className={c.menuItem} onClick={() => document.getElementById('Home').scrollIntoView()}>Home</div>
                    <div className={c.menuItem} onClick={() => document.getElementById('About').scrollIntoView()}>About</div>
                    <div className={c.menuItem} onClick={() => document.getElementById('Education').scrollIntoView()}>Education</div>
                    <div className={c.menuItem} onClick={() => document.getElementById('Skills').scrollIntoView()}>Skills</div>
                    <div className={c.menuItem} onClick={() => document.getElementById('Certifications').scrollIntoView()}>Certifications</div>
                    <div className={c.menuItem} onClick={() => document.getElementById('Projects').scrollIntoView()}>Projects</div>
                    <div className={c.menuItem} onClick={() => document.getElementById('Contact').scrollIntoView()}>Contact</div>
                </div>
                <div onClick={toggleMenu} className={c.toggleMenu}>
                    {open ? <RxCross2 /> : <VscThreeBars />}
                </div>
            </div>
            <div className={`${c.overlay} ${open ? c.open : ''}`} onClick={toggleMenu}></div>
            <div className={`${c.openMenu} ${open ? c.open : ''}`} style={{ left: 0, textAlign: 'center' }}>
                <div className={c.menuItem} onClick={() => { document.getElementById('Home').scrollIntoView(); toggleMenu(); }}>Home</div>
                <div className={c.menuItem} onClick={() => { document.getElementById('About').scrollIntoView(); toggleMenu(); }}>About</div>
                <div className={c.menuItem} onClick={() => { document.getElementById('Education').scrollIntoView(); toggleMenu(); }}>Education</div>
                <div className={c.menuItem} onClick={() => { document.getElementById('Skills').scrollIntoView(); toggleMenu(); }}>Skills</div>
                <div className={c.menuItem} onClick={() => { document.getElementById('Certifications').scrollIntoView(); toggleMenu(); }}>Certifications</div>
                <div className={c.menuItem} onClick={() => { document.getElementById('Projects').scrollIntoView(); toggleMenu(); }}>Projects</div>
                <div className={c.menuItem} onClick={() => { document.getElementById('Contact').scrollIntoView(); toggleMenu(); }}>Contact</div>
            </div>

            <div className={c.header1}>
                <div className={c.left1}>
                    <div className={c.circle}>
                        <div className={c.photo}><img src={pic1} alt="profile" /></div>
                    </div>
                </div>
                <div className={c.right1}>
                    <div className={c.revealText}>Hi I am</div>
                    <div className={c.revealText}>Chandini Divya</div>
                    <div className={c.revealText}>Full Stack Developer</div>
                    <div>
                        <button className={c.resumeButton} onClick={handleDownload}>
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

