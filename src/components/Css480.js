import React, { useState } from "react";

export default function Css480() {
    const originalExperiences = [
        "CSS350 - Management Principles For Computing Professional",
        "CSS478 - Usability And User Centered Design.",
        "CSS360 - Software Engineering",
        "CSS370 - Analysis and Design",
        "CSS301 - Technical Writing For Computing Professionals."
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

    return (
        <div className="container">
            <h1>CSS 480 – Principles Of Human-Computer Interaction</h1>

            <section>
                <h2>Welcome!</h2>
                <p>
                    This section is built for the CSS480 course — Principles of
                    Human-Computer Interaction. I will share my website building
                    progress on this section of my personal website.
                </p>
            </section>
            <section>
                <h2>About Me</h2>
                <p>
                    I’m a Computer Science &amp; Software Engineering student at the
                    University of Washington who is passionate about designs, AI
                    systems, full‑stack development, research, and problem-solving.
                </p>
                <img
                    src="/images/kalheadshot.jpg"
                    alt="Kaleab Gudissa"
                    style={{ borderRadius: 8, float: "right", marginLeft: 24, width: 160 }}
                />
            </section>

            <section>
                <h2>Related Taken Courses</h2>
                <ul>
                    {experiences.map((exp) => (
                        <li key={exp}>{exp}</li>
                    ))}
                </ul>
                <button onClick={toggleSort}>
                    {isSorted ? "Reset Order" : "Sort Alphabetically"}
                </button>
            </section>
        </div>
    );
}



