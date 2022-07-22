/**
 * Scrimba
 * Styling with Classes
 */

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"

Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/

// import React from 'react';
// import { ReactDOM } from 'react-dom';

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

function MainContent() {
    return (
        <div className="main-content">
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>React has a lot of great features to improve my webpages</li>
                <li>There are a lot of opportunities to use React in enterprise applications</li>
                <li>Learning new skills is fun</li>
            </ol>
        </div>
    );
};

function Footer() {
    return (
        <footer className="footer">
            <small>© 2022 ZCarpenter development. All rights reserved.</small>
        </footer>
    );
};

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

ReactDOM.render(<Page />, document.getElementById('root'));