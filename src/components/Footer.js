import React from "react";

export default function Footer() {
    return (
        <footer>
            <p>
                © {new Date().getFullYear()} Kaleab Gudissa &nbsp;|&nbsp;
                <a href="mailto:ktg7@uw.edu">ktg7@uw.edu</a>
            </p>
        </footer>
    );
}
