/**
 * Scrimba
 * Organizing Components
 */

/**
Challenge: move the Footer and MainContent components
into their own files.
*/

// import React from 'react';
// import { ReactDOM } from 'react-dom';
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));