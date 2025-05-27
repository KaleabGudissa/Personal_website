import React, { useState } from "react";
import "../styles/Taekwondo.css";

export default function Taekwondo() {
    const [selectedBelt, setSelectedBelt] = useState("");

    const beltYears = {
        "White Belt": "0 years - Beginner level",
        "Yellow Belt": "0.5 to 1 year",
        "Green Belt": "1 to 2 years",
        "Blue Belt": "2 to 3 years",
        "Red Belt": "3 to 4 years",
        "Black Belt": "4 to 5+ years - Advanced level"
    };

    return (
        <div className="container">
            <h1 className="attention-text">Discover Taekwondo</h1>

            <section>
                <h2> What is Taekwondo?</h2>
                <p>
                    Taekwondo is a Korean martial art known for its high kicks, fast moves,
                    and powerful blocks. It's not just about fighting. It's also about
                    respect, focus, and self-control.
                </p>
                <img src="/images/taekwondo-kick.png" alt="High kick" className="img" />
            </section>

            <section>
                <h2> Why People Love It</h2>
                <p>
                    Whether you're young or old, Taekwondo helps you stay fit, sharp, and
                    confident. It's great for learning discipline and also having fun.
                </p>
                <p>
                    Being active in sports like Taekwondo improves your health, builds
                    strong muscles and bones, increases energy, and helps you manage stress.
                    It also builds friendships and gives you something to work hard for.
                </p>
                <img src="/images/taekwondo-class.png" alt="Taekwondo class" className="img" />
            </section>

            <section>
                <h2> Focus Zones in Training</h2>
                <ul>
                    <li><strong>Forms Art(Pattern):</strong> Patterns of moves to master techniques</li>
                    <li><strong>Sparring:</strong> Practice matches to improve speed and defense</li>
                    <li><strong>Self-defense:</strong> Learn how to stay safe in real life</li>
                </ul>
                <img src="/images/taekwondo-belt.png" alt="Belt system" className="img" />
            </section>

            <section className="feature-box">
                <h2>  Belt Journey Timeline</h2>
                <p>
                    Select a Taekwondo belt to see how many years it typically takes to reach it.
                </p>
                <select
                    className="btn select-belt"
                    value={selectedBelt}
                    onChange={(e) => setSelectedBelt(e.target.value)}
                >
                    <option value="">-- Choose a Belt --</option>
                    {Object.keys(beltYears).map((belt) => (
                        <option key={belt} value={belt}>{belt}</option>
                    ))}
                </select>
                {selectedBelt && (
                    <p className="belt-info">
                        <strong>{selectedBelt}:</strong> {beltYears[selectedBelt]}
                    </p>
                )}
            </section>
        </div>
    );
}
