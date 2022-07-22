/**
 * Scrimba
 * Custom Compenents - pt. 1 & 2
 * Parent/Child Components
 */

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"

Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

// import React from 'react';
// import { ReactDOM } from 'react-dom';

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="80px"></img>
            </nav>
        </header>
    );
};

function MainContent() {
    return (
        <div>
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
        <footer>
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