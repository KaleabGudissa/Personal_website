import React from "react";

export default function ThingsToRead() {
    const links = [
        { title: "Figma on LinkedIn Learning", url: "https://www.linkedin.com/learning/search?keywords=figma" },
        { title: "Harvard CS50 – Intro to Computer Science", url: "https://cs50.harvard.edu/x/" },
        { title: "Smashing Magazine – UX & Front-End", url: "https://www.smashingmagazine.com/" },
        { title: "The A11y Project – Accessibility Checklist", url: "https://www.a11yproject.com/checklist/" },
        { title: "React Accessibility Docs", url: "https://reactjs.org/docs/accessibility.html" },
        { title: "Arsenal News & Transfers (Goal.com)", url: "https://www.goal.com/en/team/arsenal/1f5idnccphblgph6np8b9ix3o" },
        { title: "Funny Coding Memes (Reddit)", url: "https://www.reddit.com/r/ProgrammerHumor/" },
        { title: "Deque University – Accessibility Courses", url: "https://dequeuniversity.com/" },
        { title: "Frontend Mentor – Practice Projects", url: "https://www.frontendmentor.io/" },
        { title: "Arsenal FC", url: "https://www.arsenal.com" }
    ];

    return (
        <div className="container">
            <h1 tabIndex="0">Things to Read</h1>
            <p tabIndex="0">These are some of the links I am exploring to build my design skills, programming, accessibility,
                and things I enjoy like Arsenal FC and a little humor.
            </p>
            <ul>
                {links.map((link, i) => (
                    <li key={i}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" tabIndex="0">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>

            <section>
                <h2 tabIndex="0">Keyboard Navigation Instructions</h2>
                <p tabIndex="0">
                    * You can use <strong>Tab</strong> key to move between the
                    links above.
                    Press <strong>Enter</strong> to activate a link.
                    I focused on ensuring a logical tab order and visible focus
                    indicators to support efficient navigation and reduce user
                    confusion.
                </p>
                <p tabIndex="0">
                    * I focused on ensuring a logical tab order and visible focus
                    indicators to support efficient navigation and reduce user
                    confusion.
                </p>
            </section>
        </div>
    );
}
