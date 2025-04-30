// import React, { useState } from "react";
//
// export default function Css480() {
//     const originalExperiences = [
//         "CSS350 - Management Principles For Computing Professional",
//         "CSS478 - Usability And User Centered Design.",
//         "CSS360 - Software Engineering",
//         "CSS370 - Analysis and Design",
//         "CSS301 - Technical Writing For Computing Professionals."
//     ];
//
//     const [experiences, setExperiences] = useState(originalExperiences);
//     const [isSorted, setIsSorted] = useState(false);
//
//     const toggleSort = () => {
//         if (isSorted) {
//             setExperiences(originalExperiences);
//         } else {
//             const sortedList = [...experiences].sort();
//             setExperiences(sortedList);
//         }
//         setIsSorted(!isSorted);
//     };
//
//     return (
//         <div className="container">
//             <h1>CSS 480 – Principles Of Human-Computer Interaction</h1>
//
//             <section>
//                 <h2>Welcome!</h2>
//                 <p>
//                     This section is built for the CSS480 course — Principles of
//                     Human-Computer Interaction. I will share my website building
//                     progress on this section of my personal website.
//                 </p>
//             </section>
//
//             <section>
//                 <h2>About Me</h2>
//                 <p>
//                     I’m a Computer Science &amp; Software Engineering student at the
//                     University of Washington who is passionate about designs, AI
//                     systems, full‑stack development, research, and problem-solving.
//                 </p>
//                 <img
//                     src="/images/kalheadshot.jpg"
//                     alt="Kaleab Gudissa"
//                     style={{ borderRadius: 8, float: "right", marginLeft: 24, width: 160 }}
//                 />
//             </section>
//
//             <section>
//                 <h2>Related Taken Courses</h2>
//                 <ul>
//                     {experiences.map((exp) => (
//                         <li key={exp}>{exp}</li>
//                     ))}
//                 </ul>
//                 <button onClick={toggleSort}>
//                     {isSorted ? "Reset Order" : "Sort Alphabetically"}
//                 </button>
//             </section>
//         </div>
//     );
// }


import React, { useState } from "react";

export default function Css480() {
    const originalExperiences = [
        "CSS350 – Programming Practices",
        "CSS478 – Machine Learning",
        "CSS360 – Software Engineering",
        "CSS370 – Analysis and Design",
        "CSS301 – Technical Writing"
    ];

    const [experiences, setExperiences] = useState(originalExperiences);
    const [isSorted, setIsSorted] = useState(false);

    const toggleSort = () => {
        if (isSorted) {
            setExperiences(originalExperiences);
        } else {
            const sortedList = [...experiences].sort();
            setExperiences(sortedList);
        }
        setIsSorted(!isSorted);
    };

    const readingLinks = [
        { title: "W3C Keyboard Shortcuts", url: "https://www.w3schools.com/tags/ref_keyboardshortcuts.asp" },
        { title: "WebAIM Keyboard Techniques", url: "https://webaim.org/techniques/keyboard/" },
        { title: "WebAIM Evaluation Checklist", url: "https://webaim.org/resources/evalquickref/#keyboard" },
        { title: "React Accessibility", url: "https://reactjs.org/docs/accessibility.html" },
        { title: "ARIA Practices Guide", url: "https://www.w3.org/WAI/ARIA/apg/" },
        { title: "MDN Keyboard Accessibility", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets" },
        { title: "Inclusive Components", url: "https://inclusive-components.design/" },
        { title: "Deque University", url: "https://dequeuniversity.com/" },
        { title: "A11y Project Checklist", url: "https://www.a11yproject.com/checklist/" },
        { title: "Accessibility Design Principles", url: "https://www.smashingmagazine.com/2021/11/web-accessibility-design-principles/" }
    ];

    return (
        <div className="container">
            <h1 tabIndex="0">CSS 480 – Principles of Human-Computer Interaction</h1>

            <section>
                <h2 tabIndex="0">Welcome!</h2>
                <p tabIndex="0">
                    This section is built for the CSS480 course — Principles of Human-Computer Interaction.
                    I will share my website building progress on this section of my personal website.
                </p>
            </section>

            <section>
                <h2 tabIndex="0">About Me</h2>
                <p tabIndex="0">
                    I’m a Computer Science &amp; Software Engineering student at the University of Washington who is passionate
                    about design, AI systems, full‑stack development, research, and problem-solving.
                </p>
                <img
                    src="/images/kalheadshot.jpg"
                    alt="Kaleab Gudissa"
                    style={{ borderRadius: 8, float: "right", marginLeft: 24, width: 160 }}
                />
            </section>

            <section>
                <h2 tabIndex="0">Related Taken Courses</h2>
                <ul>
                    {experiences.map((exp) => (
                        <li key={exp} tabIndex="0">{exp}</li>
                    ))}
                </ul>
                <button onClick={toggleSort}>
                    {isSorted ? "Reset Order" : "Sort Alphabetically"}
                </button>
            </section>

            <section>
                <h2 tabIndex="0">Things to Read</h2>
                <p tabIndex="0">Below are 10 resources I’m currently reading to deepen my knowledge in accessibility and interface design:</p>
                <ul>
                    {readingLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" tabIndex="0">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 tabIndex="0">Keyboard Access Documentation</h2>
                <p tabIndex="0">
                    You can navigate this entire page using the <strong>Tab</strong> key to move between headings,
                    buttons, and links. Once focused, press <strong>Enter</strong> or <strong>Space</strong> to activate elements.
                    A visible outline will indicate the current focus.
                </p>
                <p tabIndex="0">
                    <strong>What I'm focusing on:</strong> Ensuring a logical tab order and strong focus visibility for all
                    interactive elements, particularly in the navigation and reading list.
                </p>
            </section>
        </div>
    );
}
