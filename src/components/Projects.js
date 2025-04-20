import React from "react";

const projects = [

    {
        title: "Secure Incident Reporter",
        blurb: "This project helps citizens safely and securely upload" +
            " evidence.",
        // img: "/images/incident_reporter.png",
        link: "https://github.com/KaleabGudissa/Secure-Incident-Report"
    },
    {
        title: "Greedy-robot",
        blurb: "Greedy Robot is a C++ program that calculates all the possible paths a robot can take to reach a treasure on a grid, following specific constraints:",
        // img: "/images/incident_reporter.png",
        link: "https://github.com/KaleabGudissa/Greedy-robot"
    },
];

export default function Projects() {
    return (
        <div className="container">
            <h1>Projects</h1>

            <div className="cards">
                {projects.map((p) => (
                    <ProjectCard key={p.title} {...p} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ title, blurb, img, link }) {
    return (
        <div className="card" onClick={() => link && window.open(link, "_blank")}>
            {img && <img src={img} alt={title} style={{ borderRadius: 6, marginBottom: 12 }} />}
            <h3>{title}</h3>
            <p>{blurb}</p>
            {link && <span className="btn" style={{ marginTop: 12, display: "inline-block" }}>View&nbsp;Repo</span>}
        </div>
    );
}
