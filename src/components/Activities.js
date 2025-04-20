import React from "react";

const activities = [
    {
        name: "WSOS Scholar",
        role: "Washington State Opportunity Scholarship Recipient",
        desc: "Actively engaged in networking, and academic support through WSOS’s statewide scholar community.",
        image: "/images/wsos.jpg",
        link: "https://www.waopportunityscholarship.org/scholars/"
    },
    {
        name: "Tech Tonic",
        role: "Product Manager",
        desc: "Leading product design and development cycles for out team's" +
            " website. Collaborating with engineers and designers to bring" +
            " ideas to life.",
        image: "/images/techtonic.jpg",
        link: "https://github.com/Team-Tech-Tonic"
    },
    {
        name: "Abysynnia Soccer Club",
        desc: "Representing the community through weekly matches and tournaments. Supporting youth soccer engagement and team coordination.",
        image: "/images/abysynnia.jpg"
    },
];

export default function Activities() {
    return (
        <div className="container">
            <h1>Activities &amp; Involvement</h1>

            {activities.map((a) => (
                <section key={a.name} style={{ marginBottom: 40 }}>
                    <h2>{a.name}</h2>
                    <p><em>{a.role}</em></p>
                    <p>{a.desc}</p>

                    {a.image && (
                        <img
                            src={a.image}
                            alt={a.name}
                            style={{ borderRadius: 8, width: "100%", maxWidth: 400, marginTop: 10 }}
                        />
                    )}

                    {a.link && (
                        <p style={{ marginTop: 10 }}>
                            <a href={a.link} target="_blank" rel="noopener noreferrer">
                                Learn more ↗
                            </a>
                        </p>
                    )}
                </section>
            ))}
        </div>
    );
}
