import React from "react";

export default function Home() {
    return (
        <div className="container">
            <h1>Hello, I’m Kaleab Gudissa</h1>

            <img
                src="/images/kalheadshot.jpg"
                alt="Kaleab Gudissa headshot"
                style={{ borderRadius: "50%", width: 180, marginBottom: 24 }}
            />

            <p>
                I’m a Computer Science &amp; Software Engineering student at University of Washington who is passionate
                about designs, AI systems, full‑stack development, Research and Problem-Solving.
            </p>

            <div className="socials">
                <a href="https://github.com/KaleabGudissa" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/kaleab-gudissa-701369230/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="/files/Kaleab_Gudissa_Resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
                <a href="/files/Kaleab_Gudissa_Certificates.pdf" target="_blank" rel="noopener noreferrer">Certificates</a>
            </div>

            <section>
                <h2>Technical Skills</h2>
                <ul>
                    <li>Languages: C++, Python, Java, JavaScript</li>
                    <li>Web Technologies: HTML, CSS</li>
                    <li>Frameworks: React</li>
                    <li>Tools: Git, Figma</li>
                </ul>
            </section>

            <section>
                <h2>Education</h2>
                <ul>
                    <li><strong>B.S.</strong> Computer Science &amp; Software Engineering — University of Washington (Expected Winter 2026)</li>
                    <li><strong>A.A.</strong> Computer Science — North Seattle College (Winter 2024)</li>
                </ul>
                <p>
                    You can view my complete résumé&nbsp;
                    <a href="/files/Kaleab_Gudissa_Resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
            </section>

            <section>
                <h2>Let’s Connect</h2>
                <p>
                    If you’re interested in collaboration, internships, or just want to
                    chat tech, feel free to reach out via email&nbsp;
                    <a href="mailto:ktg7@uw.edu">ktg7@uw.edu</a>.
                </p>
            </section>
        </div>
    );
}
